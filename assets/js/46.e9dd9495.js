(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{447:function(s,e,a){"use strict";a.r(e);var t=a(2),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("1.web服务器只只专注于接受请求和返回相应，并不涉及具体的业务逻辑。\n"),e("img",{attrs:{src:"https://img.hacpai.com/file/2019/11/image-da688501.png",alt:"image.png"}})]),s._v(" "),e("p",[s._v("2.请求转发模型\ntcp端口不管有没有请求，都会一直等着，并一直监听着，等待着请求的到来\n"),e("img",{attrs:{src:"https://img.hacpai.com/file/2019/11/image-414b9edc.png",alt:"image.png"}})]),s._v(" "),e("p",[s._v("3.sevlet\nsevlet是一种规范，约束了Java服务器和业务类的通信方式\n是一种接口，javax.servlet.Servlet\n是一个实现类，实现了sevlet接口的实现类\nweb服务器通过sevletRequest和sevletResponse类和sevlet进行交互")]),s._v(" "),e("p",[s._v("4.在framework模块中加入tomcat embed的依赖\n// https://mvnrepository.com/artifact/org.apache.tomcat.embed/tomcat-embed-core\ncompile group: 'org.apache.tomcat.embed', name: 'tomcat-embed-core', version: '8.5.23'")]),s._v(" "),e("p",[s._v("5.web包中开始写sever")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('package cn.chenforcode.web.server;\n\nimport org.apache.catalina.LifecycleException;\nimport org.apache.catalina.startup.Tomcat;\n\npublic class TomcatServer {\n    private Tomcat tomcat;\n    private String[] args;\n\n    TomcatServer(String[] args) {\n        this.args = args;\n    }\n\n    public void startServer() throws LifecycleException {\n        tomcat = new Tomcat();\n        tomcat.setPort(6699);\n        tomcat.start();\n\n        Thread awaitThread = new Thread("tomcat_await_thread") {\n            @Override\n            public void run() {\n                TomcatServer.this.tomcat.getServer().await();\n            }\n        };\n        awaitThread.setDaemon(false);\n        awaitThread.start();\n    }\n}\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br")])]),e("p",[s._v("其中startServer方法是启动一个tomcat服务器")]),s._v(" "),e("p",[s._v("6.在miniapplication中启动一个服务器")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('public class MiniApplication {\n    public static void run(Class<?> cls, String[] args) {\n        System.out.println("Hello Mini-spring!");\n        TomcatServer tomcatServer = new TomcatServer(args);\n        try {\n            tomcatServer.startServer();\n        } catch (LifecycleException e) {\n            e.printStackTrace();\n        }\n    }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("7.建立一个servlet，并实现其servlet方法")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('    @Override\n    public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {\n        res.getWriter().println("test");\n    }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("8.在服务器中注册servlet")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('public void startServer() throws LifecycleException {\n        tomcat = new Tomcat();\n        tomcat.setPort(6699);\n        tomcat.start();\n\n        //建立一个容器\n        Context context = new StandardContext();\n        context.setPath("");\n        //增加生命周期监听器\n        context.addLifecycleListener(new Tomcat.FixContextListener());\n\n        //创建servlet\n        TestServlet testServlet = new TestServlet();\n        //把servlet加入到tomcat里，并支持异步\n        Tomcat.addServlet(context, "testServlet",testServlet).setAsyncSupported(true);\n\n        //增加servlet的映射\n        context.addServletMappingDecoded("/test.json", "testServlet");\n\n        //context容器必须依附在一个host容器中\n        tomcat.getHost().addChild(context);\n\n\n        Thread awaitThread = new Thread("tomcat_await_thread") {\n            @Override\n            public void run() {\n                TomcatServer.this.tomcat.getServer().await();\n            }\n        };\n        awaitThread.setDaemon(false);\n        awaitThread.start();\n    }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br")])]),e("p",[s._v("9.重新打包运行，在浏览器中访问/test.json就能够得到相应的结果。")])])}),[],!1,null,null,null);e.default=n.exports}}]);