---
title: mini-spring第五期：bean管理
date: 2019-11-08
tags:
 - Spring
 - Java
 - 框架
 - MiniSpring系列
categories:
 - MiniSpring
---

1.首先解决上一节课的疑问：没有找到参数传递的地方，经过我的debug，发现参数传递确实是无效的，
![image.png](https://img.hacpai.com/file/2019/11/image-bb0d10d6.png)
问题在这里，这个地方是创建mappinghandler的地方，这里的paramNameList只是把带有requestParam注解的参数的vaule值，也就是这个参数的名字，换句话说是从前端传过来的参数的名称，但并不是真正的参数的值，然后把这个list转化为args数组，建立一个mappinghandler。

2.接着在handler执行handle方法的时候
![image.png](https://img.hacpai.com/file/2019/11/image-61f37d6d.png)
向invoke传递的参数，仍然是那个args数组。所以也就不存在传值的了。

3.至此，把springmvc的大致过程捋一捋
@1.项目启动的时候首先是创建一个tomcat服务器，服务器中绑定了一个dispatcherServlet，这个servlet的映射为“/”根路径，意思是所有的请求都会经过这个请求。
@2.启动server之后，会进行类扫描，把项目包下的所有类都扫描到一个集合中。
@3.进行mappinghandler的创建，这个创建过程就是对上一步的类进行解析，对带有controller的进行解析，然后对类中带有requestMapping和requestParam注解的方法进行解析。这里是每一个方法对应一个handler
@4.请求来临，被dispatcherServlet拦截，用循环根据请求的url判断由哪个mappingHandler所处理
@5.找到了对应的handler，这个时候由于handler已经具有了如下属性：如自己是属于哪个controller，参数是什么，然后利用反射初始化controller实例，接着用invoke方法调用处理，并返回处理结果。

4.接着完成框架，bean的管理
创建的流程：
@1循环遍历所需要创建的bean
@2判断这个bean是否需要先创建依赖，如果不需要，则直接创建bean并放入beanFactory，如果需要创建依赖，则先判断所依赖的baen是否在beanFactory中，如果存在的拿到该依赖并set，然后成功创建该bean，如果不再beanFactory中，则先放弃创建这个 bean，先创建后边的。
@3以此循环，知道所有的bean创建结束
@4这样有一个问题，就是无法处理相互依赖的情况，类似于死锁，这个时候就需要判断每次循环之后所需要创建bean的数量是不是有变化，如果没有变化，说明陷入了训话，需要抛出异常，退出循环。

5.首先创建与bean管理相关的注解，@Bean和@AutoWired
```
package cn.chenforcode.beans;

import java.lang.annotation.*;

@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface Bean {
}

```
```
package cn.chenforcode.beans;

import java.lang.annotation.*;

@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface AutoWired {
}

```

6.创建beanFactory
```
private static Map<Class<?>, Object> classToBean = new ConcurrentHashMap<>();

    public static Object getBean(Class<?> cls) {
        return classToBean.get(cls);
    }
```
保存一个map，存储类和对象，能够根据类类型得到类对象
然后写出一个方法

7.实现initBean方法，实现bean的初始化
```
/**
     * @Author <a href="http://www.chenforcode.cn">PKUCoder</a>
     * @Date 2019/11/7 11:44 下午
     * @Param [classList]
     * @Return void
     * @Description 根据扫描到的类定义，进行bean的创建
     **/
    public static void initBean(List<Class<?>> classList) throws Exception {
        List<Class<?>> toCreate = new ArrayList<>(classList);
        //如果容器中还有，就一直循环
        while (toCreate.size() != 0) {
            //保存每次遍历之前的容器大小
            int remainSize = toCreate.size();
            //进行遍历创建
            for (int i = 0; i < toCreate.size(); i++) {
                //如果创建成功就把它给移除
                if (finishCreate(toCreate.get(i))) {
                    toCreate.remove(i);
                }
            }
            //如果一次遍历之后，大小没有变化，说明陷入了循环依赖
            if (toCreate.size() == remainSize) {
                throw new Exception("cycle dependency");
            }
        }
    }
```

8.实现finishBean方法，完成bean创建的具体流程
```
/**
     * @Author <a href="http://www.chenforcode.cn">PKUCoder</a>
     * @Date 2019/11/8 12:06 上午
     * @Param [cls]
     * @Return boolean
     * @Description 实现bean创建的具体流程
     **/
    private static boolean finishCreate(Class<?> cls) throws IllegalAccessException, InstantiationException {
        //如果没有带这个两个注解，说明不需要创建，则直接返回true
        if (!cls.isAnnotationPresent(Controller.class) && !cls.isAnnotationPresent(Bean.class)) {
            return true;
        }
        //创建这个类的实例
        Object bean = cls.newInstance();
        //然后判断这个类是否需要其他的依赖
        for (Field field: cls.getDeclaredFields()) {
            //如果带有@AutoWired注解，则说明需要先初始化该属性
            if (field.isAnnotationPresent(AutoWired.class)) {
                //获取到这个属性的type
                Class<?> fieldType = field.getType();
                //从工厂中拿到这个bean
                Object reliantBean = BeanFactory.getBean(fieldType);
                if (reliantBean == null) {
                    //如果工厂中还没有这个bean，那么这次创建失败
                    return false;
                }
                //把这个字段的属性设置为可接入，就相当于把private变成public
                field.setAccessible(true);
                //将这个属性设置进去
                field.set(bean, reliantBean);
                //加入beanFactory
                BeanFactory.classToBean.put(cls, bean);
            }
        }
        return true;
    }
```
9.最后，在handlerMapping修改controller的创建方式
把直接创建实例变成从工厂中获取
```
Object ctl = BeanFactory.getBean(controller);
```
