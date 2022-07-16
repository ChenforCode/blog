(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{449:function(s,n,a){"use strict";a.r(n);var e=a(2),r=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("1.在core包中定义ClassScanner,并定义scanClass方法，目的是给定一个包路径，扫描出该包下面的所有类\n主要的流程是：\n@1.拿到改包路径下的所有资源，遍历\n@2.如果是jar包，就继续遍历这个jar包，把jar包的需要的class扫描进来，也就是以我们包名的开头的.class文件\n@3.jar包中的jarentryname的格式是cn/chenforcode/xxx.class，所以必须转换成包名，然后才可以用类加载器进行扫描。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('package cn.chenforcode.core;\n\nimport java.io.IOException;\nimport java.net.JarURLConnection;\nimport java.net.URL;\nimport java.util.ArrayList;\nimport java.util.Enumeration;\nimport java.util.List;\nimport java.util.jar.JarEntry;\nimport java.util.jar.JarFile;\n\npublic class ClassSacnner {\n    public static List<Class<?>> scanClass(String packageName) throws IOException, ClassNotFoundException {\n        List<Class<?>> classList = new ArrayList<>();\n        //根据包名获取路径\n        String path = packageName.replace(".", "/");\n        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();\n        //获取到这个路径下的所有资源\n        Enumeration<URL> resources = classLoader.getResources(path);\n        //遍历这些资源\n        while (resources.hasMoreElements()) {\n            URL resource = resources.nextElement();\n            //如果这个文件是一个jar包，需要单独处理\n            if (resource.getProtocol().contains("jar")) {\n                //拿到jar包连接\n                JarURLConnection jarURLConnection = (JarURLConnection) resource.openConnection();\n                //拿到jar包路径\n                String jarFilePath = jarURLConnection.getJarFile().getName();\n                classList.addAll(getClassesFromJar(jarFilePath, path));\n            } else {\n                //todo 处理不是jar包类型的资源\n            }\n        }\n        return classList;\n    }\n\n    public static List<Class<?>> getClassesFromJar(String jarFilePath, String path) throws IOException, ClassNotFoundException {\n        //todo 从jar包中获取所需要的类\n        List<Class<?>> classes = new ArrayList<>();\n        //获取这个jar文件\n        JarFile jarFile = new JarFile(jarFilePath);\n        //拿到jar文件的entry集合\n        Enumeration<JarEntry> jarEntries = jarFile.entries();\n        //遍历jar文件\n        while (jarEntries.hasMoreElements()) {\n            JarEntry jarEntry = jarEntries.nextElement();\n            //拿到某个类的entryname，集体格式如cn/chenforcode/xxx.class\n            String entryName = jarEntry.getName();\n            //判断这个文件是否是我们需要的\n            if (entryName.startsWith(path) && entryName.endsWith(".class")) {\n                String classFullName = entryName.replace("/", ".")\n                        .substring(0, entryName.length() - 6);\n                //如果是把它加载进去，并加入class的list返回\n                classes.add(Class.forName(classFullName));\n            }\n        }\n        return classes;\n    }\n}\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br")])]),n("p",[s._v("2.开始编写handler")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("package cn.chenforcode.web.handler;\n\nimport java.lang.reflect.Method;\n\npublic class MappingHandler {\n    private String uri;\n    private Method method;\n    private Class<?> controller;\n    private String[] args;\n\n    MappingHandler(String uri, Method method, Class<?> cls, String[] args) {\n        this.uri = uri;\n        this.method = method;\n        this.cls = cls;\n        this.args = args;\n    }\n}\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("3.创建handlerManager来管理mappingHandler")]),s._v(" "),n("p",[s._v("4.创建resolveMappingHandler方法，对给出的类列表进行遍历")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('/**\n     * @Author <a href="http://www.chenforcode.cn">PKUCoder</a>\n     * @Date 2019/11/6 4:50 下午\n     * @Param [classList]\n     * @Return void\n     * @Description 对给出的一个类列表遍历，解析其中的方法\n     **/\n    public static void resolveMappingHandler(List<Class<?>> classList) {\n        for (Class<?> cls : classList) {\n            if (cls.isAnnotationPresent(Controller.class)) {\n                parseHandlerFromController(cls);\n            }\n        }\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("5.创建parseHandlerFromController方法，对某个类中的方法进行解析")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('/**\n     * @Author <a href="http://www.chenforcode.cn">PKUCoder</a>\n     * @Date 2019/11/6 5:17 下午\n     * @Param [cls]\n     * @Return void\n     * @Description 对某个类中的方法进行解析\n     **/\n    private static void parseHandlerFromController(Class<?> cls) {\n        Method[] methods = cls.getDeclaredMethods();\n        for (Method method : methods) {\n            //如果没有被requestMapping注解修饰就不用解析了\n            if (!method.isAnnotationPresent(RequestMapping.class)) {\n                continue;\n            }\n            //得到mapping需要的参数\n            //获取uri\n            String uri = method.getDeclaredAnnotation(RequestMapping.class).value();\n            //获取参数\n            List<String> paramNameList = new ArrayList<>();\n            //遍历参数，如果带有了requestParam注解的话，就进行解析\n            for (Parameter parameter: method.getParameters()) {\n                if (parameter.isAnnotationPresent(RequsetParam.class)) {\n                    //得到所有的参数名称，加入一个list\n                    paramNameList.add(parameter.getDeclaredAnnotation(RequsetParam.class).value());\n                }\n            }\n            //将参数list转化成参数数组\n            String[] args = paramNameList.toArray(new String[paramNameList.size()]);\n            //构造一个mappingHandler，注意这个handler是方法级别的，每一个方法都对应着一个handler\n            MappingHandler mappingHandler = new MappingHandler(uri, method, cls, args);\n            //加入到handler的集合中\n            HandlerManager.mappingHandlerList.add(mappingHandler);\n        }\n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])]),n("p",[s._v("6.接下来是要在dispatcherservlet中使用handler")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("@Override\n    public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {\n        for (MappingHandler handler: HandlerManager.mappingHandlerList) {\n            try {\n                if (handler.handle(req, res)) {\n                    return;\n                }\n            } catch (IllegalAccessException e) {\n                e.printStackTrace();\n            } catch (InstantiationException e) {\n                e.printStackTrace();\n            } catch (InvocationTargetException e) {\n                e.printStackTrace();\n            }\n        }\n    }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("7.编写handler的handle方法，即开始处理请求")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("public boolean handle(ServletRequest req, ServletResponse res) throws IllegalAccessException, InstantiationException, InvocationTargetException, IOException {\n        String requestURI = ((HttpServletRequest)req).getRequestURI();\n        //如果uri不相等，说明这个handler是不能处理的\n        if (!uri.equals(requestURI)) {\n            return false;\n        }\n        //开始处理请求\n        Object[] parameters = new Object[args.length];\n        //初始化参数\n        for (int i = 0; i < args.length; i++) {\n            parameters[i] = args[i];\n        }\n        Object ctl = controller.newInstance();\n        //利用反射调用controller，这个response就相当于controller执行完返回的结果\n        Object response = method.invoke(ctl, parameters);\n        res.getWriter().println(response.toString());\n        return true;\n    }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("8.这个时候可以捋一捋。。首先dispatcherServlet已经封装在了服务器中，并以一个“/”路径进行拦截，也就是说，每一个请求都会经过这个servlet，并通过他的service方法。然后在这个方法里，会进行这次请求的uri比对，根据这次请求来的uri，在所有的handlermapping中遍历，如果能够找到一个hanlermapping与之相对应，那么就让这个handlermapping进行处理，即调用handle方法。同时呢，在这个方法里，给controller实例化一个对象，然后利用method的invoke反射机制调用controller，得到处理结果，放入response并返回。")]),s._v(" "),n("p",[s._v("9.这个时候重新打包项目，运行，已经能够响应controller的请求了。")]),s._v(" "),n("p",[s._v("10.写到这里我仍让有个疑问，mappinghandler中保存的参数，我觉得应该仅仅是参数的名称的一个数组吧，如果仅仅把名称传入invoke，是如何调用的呢？？？那个真正的参数值是什么时候传递过来的呢。。")])])}),[],!1,null,null,null);n.default=r.exports}}]);