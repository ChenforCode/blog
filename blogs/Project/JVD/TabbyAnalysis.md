---
title: Tabby 源码简析
date: 2021-11-01
tags:
 - Java Vulnerability
 - Project
categories:
 - Project
---

#### 源码简析

* analyser的核心步骤

  ```java
  // 类信息抽取
  classInfoScanner.run(realTargets);
  // 函数调用分析
  callGraphScanner.run();
  rulesContainer.saveStatus();
  ```

* **类信息抽取**里。步骤大致分为：1、抽取所有的类信息，key是类名，value是类的具体信息。2、将类信息进行transform。3、收集所有的类名。4、构建类间的边。5、保存

  ```java
  public void run(List<String> paths){
    // 多线程提取基础信息
    Map<String, CompletableFuture<ClassReference>> classes = loadAndExtract(paths);
    transform(classes.values());
    List<String> runtimeClasses = new ArrayList<>(classes.keySet());
    classes.clear();
    // 单线程提取关联信息
    buildClassEdges(runtimeClasses);
    save();
  }
  ```

* loadAndExtract部分：targets是传入的要分析的jar包路径，获取这个jar包下的所有类文件，如果这个类不是抽象类，就把这个类加入result里，key是类名，value是用collector收集得到的class信息

  ```java
          for (final String path : targets) {
              for (String cl : SourceLocator.v().getClassesUnder(path)) {
                  SootClass theClass = Scene.v().loadClassAndSupport(cl);
                  if (!theClass.isPhantom()) {
                      // 这里存在类数量不一致的情况，是因为存在重复的对象
                      results.put(cl, collector.collect(theClass));
                      theClass.setApplicationClass();
                      if(counter % 10000 == 0){
                          log.info("Collected {} classes.", counter);
                      }
                      counter++;
                  }
              }
          }
  ```

* collector的colloet操作：看注释。然后进一步查看抽取methodInfo的操作

  ```java
      public static ClassReference collect0(SootClass cls, DataContainer dataContainer){
          ClassReference classRef = ClassReference.newInstance(cls);
          //获取cls的所有父类
          Set<String> relatedClassnames = getAllFatherNodes(cls);
          //如果父类任何一方实现了序列化接口，这个cls就是一个可序列化的类
          classRef.setSerializable(relatedClassnames.contains("java.io.Serializable"));

          // 提取类函数信息
          if(cls.getMethodCount() > 0){
              //如果有函数则进一步提取函数信息
              for (SootMethod method : cls.getMethods()) {
                  extractMethodInfo(method, classRef, relatedClassnames, dataContainer);
              }
          }
          return classRef;
      }
  ```

* 这里主要就是抽取类中的一些info，主要包括，类名，方法名，方法的rule（判断方法是source，sink或者是被忽略的）。然后洗的一些先验知识的操作没有看太明白，即赋值的polluted和action没太看明白

  ```java
      public static void extractMethodInfo(SootMethod method,
                                    ClassReference ref,
                                    Set<String> relatedClassnames,
                                    DataContainer dataContainer
      ){
          RulesContainer rulesContainer = dataContainer.getRulesContainer();
          String classname = ref.getName();
          MethodReference methodRef = MethodReference.newInstance(classname, method);
          TabbyRule.Rule rule = rulesContainer.getRule(classname, methodRef.getName());

          //如果此类没有rule，支持查找父类rule
          if (rule == null) { // 对于ignore类型，支持多级父类和接口的规则查找
              for (String relatedClassname : relatedClassnames) {
                  TabbyRule.Rule tmpRule = rulesContainer.getRule(relatedClassname, methodRef.getName());
                  if (tmpRule != null && tmpRule.isIgnore()) {
                      rule = tmpRule;
                      break;
                  }
              }
          }

          //判断该方法是否是sink，是否是source，是否被忽略
          boolean isSink = rule != null && rule.isSink();
          boolean isIgnore = rule != null && rule.isIgnore();
          boolean isSource = rule != null && rule.isSource();

          methodRef.setSink(isSink);
          methodRef.setPolluted(isSink);
          methodRef.setIgnore(isIgnore);
          methodRef.setSource(isSource);
          methodRef.setSerializable(relatedClassnames.contains("java.io.Serializable"));
          // 此处，对于sink、know、ignore类型的规则，直接选取先验知识
          // 对于source类型 不赋予其actions和polluted
          if (rule != null && !isSource) {
              Map<String, String> actions = rule.getActions();
              List<Integer> polluted = rule.getPolluted();
              if(isSink){
                  methodRef.setVul(rule.getVul());
              }
              methodRef.setActions(actions!=null?actions:new HashMap<>());
              methodRef.setPollutedPosition(polluted!=null?polluted:new ArrayList<>());
              methodRef.setInitialed(true);
              methodRef.setActionInitialed(true);
          }

          Has has = Has.newInstance(ref, methodRef);
          ref.getHasEdge().add(has);
          dataContainer.store(has);
          dataContainer.store(methodRef);
      }
  ```

* loadAndExtract到这里就结束了。里边主要是对类基础信息的一些抽取，进行了一个collect操作，包括一个类基础信息的collect和一个method信息的collect

* 然后是transform操作，传入的是所有的classReference，进行了一个store操作，store是将所有的classRerence进行了一个映射，存储了name=>ref的一个map结构

  ```java
      public void transform(Collection<CompletableFuture<ClassReference>> futures){
          for(CompletableFuture<ClassReference> future:futures){
              try {
                  ClassReference classRef = future.get();
                  dataContainer.store(classRef);
              } catch (InterruptedException | ExecutionException e) {
                  e.printStackTrace();
                  // 异步获取出错
              }
          }
      }
  ```

  ```java
      public <T> void store(T ref) {
          if(ref == null) return;
          if(ref instanceof ClassReference){
              ClassReference classRef = (ClassReference) ref;
              savedClassRefs.put(classRef.getName(), classRef);
          }else if(ref instanceof MethodReference){
              MethodReference methodRef = (MethodReference) ref;
              savedMethodRefs.put(methodRef.getSignature(), methodRef);
          }else if(ref instanceof Has){
              savedHasNodes.add((Has) ref);
          }else if(ref instanceof Call){
              savedCallNodes.add((Call) ref);
          }else if(ref instanceof Interfaces){
              savedInterfacesNodes.add((Interfaces) ref);
          }else if(ref instanceof Extend){
              savedExtendNodes.add((Extend) ref);
          }else if(ref instanceof Alias){
              savedAliasNodes.add((Alias) ref);
          }
      }
  ```

* 接下来是buildClassEdges操作，这里边直接传入所有的classReference的name，

  ```java
      public void buildClassEdges(List<String> classes){
          int counter = 0;
          int total = classes.size();
          log.info("Build {} classes' edges.", total);
          for(String cls:classes){
              if(counter%10000 == 0){
                  log.info("Build {}/{} classes.", counter, total);
              }
              counter++;
              ClassReference clsRef = dataContainer.getClassRefByName(cls);
              if(clsRef == null) continue;
              extractRelationships(clsRef, dataContainer, 0);
          }
          log.info("Build {}/{} classes.", counter, total);
      }
  ```

* 对每个class进行一个extractRelationships操作

  ```java
      public static void extractRelationships(ClassReference clsRef, DataContainer dataContainer, int depth){
          // 建立继承关系，和自己的父类产生一个Extend关系
          if(clsRef.isHasSuperClass()){
              ClassReference superClsRef = dataContainer.getClassRefByName(clsRef.getSuperClass());
              if(superClsRef == null && depth < 10){ // 正常情况不会进入这个阶段
                  superClsRef = collect0(clsRef.getSuperClass(), null, dataContainer, depth+1);
              }
              if(superClsRef != null){
                  Extend extend =  Extend.newInstance(clsRef, superClsRef);
                  clsRef.setExtendEdge(extend);
                  dataContainer.store(extend);
              }
          }
          // 建立接口关系，与自己的的所有接口产生一个Interface关系
          if(clsRef.isHasInterfaces()){
              List<String> infaces = clsRef.getInterfaces();
              for(String inface:infaces){
                  ClassReference infaceClsRef = dataContainer.getClassRefByName(inface);
                  if(infaceClsRef == null && depth < 10){// 正常情况不会进入这个阶段
                      infaceClsRef = collect0(inface, null, dataContainer, depth+1);
                  }
                  if(infaceClsRef != null){
                      Interfaces interfaces = Interfaces.newInstance(clsRef, infaceClsRef);
                      clsRef.getInterfaceEdge().add(interfaces);
                      dataContainer.store(interfaces);
                  }
              }
          }
          // 建立函数别名关系
          makeAliasRelations(clsRef, dataContainer);
      }
  ```

* 还有一步是建立函数别名关系，函数别名关系有点类似于gadgetinspector里边的子类同名函数，即当前的method，如果在父类以及所有的祖先类中存在一个同名的method，那么会建立一个alias关系，source是curMethod，target是methodInFather，

  ```java
      public static void makeAliasRelation(Has has, DataContainer dataContainer) {
          MethodReference sourceRef = has.getMethodRef();
          SootMethod sootMethod = sourceRef.getMethod();
          if(sootMethod == null)return;
          SootMethodRef sootMethodRef = sootMethod.makeRef();
          MethodReference targetRef = dataContainer.getMethodRefFromFatherNodes(sootMethodRef);
          if(targetRef != null
                  && !targetRef.getSignature().equals("<java.lang.Object: void <init>()>")
                  && targetRef.getParameters().size() == sourceRef.getParameters().size()
          ){ // 别名关系 参数类型可以不一样 但 参数数量一定要一样
              Alias alias = Alias.newInstance(sourceRef, targetRef);
              sourceRef.setAliasEdge(alias);
              dataContainer.store(alias);
          }
      }
  ```

* 最后一步是一个save操作，将class，method，以及所有的边关系都存储到一起

* 然后我们查看**函数调用分析**
* test


