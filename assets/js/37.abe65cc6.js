(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{438:function(n,s,e){"use strict";e.r(s);var a=e(2),r=Object(a.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[s("img",{attrs:{src:"https://img.hacpai.com/bing/20171206.jpg?imageView2/1/w/960/h/540/interlace/1/q/100",alt:""}})]),n._v(" "),s("p",[n._v("1.第一步，建立一个springboot工程，这个地方不再赘述，但是有些点需要注意，因为这次是springcloud的应用，也就是有多个模块，那么在父模块的pom文件里，有一些和单模块应用的不同，记录一下pom文件")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>cn.chenforcode.homepage</groupId>\n    <artifactId>imooc-homepage</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <modules>\n        <module>homepage-eureka</module>\n    </modules>\n\n    \x3c!--  如果是父模块的pom文件的话，他的打包方式必须是pom  --\x3e\n    <packaging>pom</packaging>\n    <name>imooc-homepage-spring-cloud</name>\n    <description>Project for ImoocHomepage SpringCloud</description>\n\n    \x3c!--  springboot项目都需要加的一个依赖  --\x3e\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>2.1.4.RELEASE</version>\n    </parent>\n\n    \x3c!--  标注springcloud版本  --\x3e\n    <properties>\n        <spring-cloud.version>Greenwich.RELEASE</spring-cloud.version>\n    </properties>\n\n    \x3c!--  引入相关的依赖  --\x3e\n    <dependencies>\n        <dependency>\n            <groupId>org.projectlombok</groupId>\n            <artifactId>lombok</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n\n    \x3c!--  管理springcloud的版本  --\x3e\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>org.springframework.cloud</groupId>\n                <artifactId>spring-cloud-dependencies</artifactId>\n                <version>${spring-cloud.version}</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n\n    \x3c!--  配置maven远程仓库  --\x3e\n    <repositories>\n        <repository>\n            <id>spring-milestones</id>\n            <name>Spring Milestones</name>\n            <url>http://repo.spring.io/milestone</url>\n            <snapshots>\n                <enabled>false</enabled>\n            </snapshots>\n        </repository>\n    </repositories>\n</project>\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br"),s("span",{staticClass:"line-number"},[n._v("55")]),s("br"),s("span",{staticClass:"line-number"},[n._v("56")]),s("br"),s("span",{staticClass:"line-number"},[n._v("57")]),s("br"),s("span",{staticClass:"line-number"},[n._v("58")]),s("br"),s("span",{staticClass:"line-number"},[n._v("59")]),s("br"),s("span",{staticClass:"line-number"},[n._v("60")]),s("br"),s("span",{staticClass:"line-number"},[n._v("61")]),s("br"),s("span",{staticClass:"line-number"},[n._v("62")]),s("br"),s("span",{staticClass:"line-number"},[n._v("63")]),s("br"),s("span",{staticClass:"line-number"},[n._v("64")]),s("br"),s("span",{staticClass:"line-number"},[n._v("65")]),s("br"),s("span",{staticClass:"line-number"},[n._v("66")]),s("br"),s("span",{staticClass:"line-number"},[n._v("67")]),s("br"),s("span",{staticClass:"line-number"},[n._v("68")]),s("br")])]),s("p",[n._v("2.建立homepage-eureka模块，目前整个项目的结构如下图\n"),s("img",{attrs:{src:"https://img.hacpai.com/file/2019/11/image-3be9bd9a.png",alt:"image.png"}})]),n._v(" "),s("p",[n._v("3.完成改模块的pom文件编写")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <parent>\n        <artifactId>imooc-homepage</artifactId>\n        <groupId>cn.chenforcode.homepage</groupId>\n        <version>1.0-SNAPSHOT</version>\n    </parent>\n    <modelVersion>4.0.0</modelVersion>\n\n    <artifactId>homepage-eureka</artifactId>\n\n    \x3c!--  指定这个子模块的版本  --\x3e\n    <version>1.0-SNAPSHOT</version>\n    \x3c!--  指定打包的方式  --\x3e\n    <packaging>jar</packaging>\n\n    \x3c!--  模块名及描述信息  --\x3e\n    <name>homepage-eureka</name>\n    <description>Spring Cloud Eureka</description>\n\n    <dependencies>\n        \x3c!--  Eureka Server:提供服务注册和服务发现  --\x3e\n        <dependency>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br")])]),s("p",[n._v("4.编写启动类")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('package cn.chenforcode.homepage;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;\n\n/**\n * @author <a href="http://www.chenforcode.cn">PKUCoder</a>\n * @date 2019/11/9 4:34 下午\n * @description Eureka模块应用启动，只需要你加入@EnableEurekaServer就可以将这个模块变成一个eureka server\n * 同时还需要在pom文件中加入相应的依赖：spring-cloud-starter-netflix-eureka-server\n */\n@SpringBootApplication\n@EnableEurekaServer\npublic class EurekaApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(EurekaApplication.class, args);\n    }\n}\n\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br")])]),s("p",[n._v("5.编写配置文件")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("spring:\n  application:\n    name: homepage-eureka\nserver:\n  port: 8000\neureka:\n  instance:\n    hostname: localhost\n  client:\n    # 表示是否从eureka server中获取注册信息 默认为true\n    fetch-registry: false\n    # 表示是否将自己注册到eureka server中 默认为true\n    register-with-eureka: false\n    service-url:\n      defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka/\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br")])]),s("p",[n._v("6.这个时候启动项目，已经可以看到eureka server的后台页面")]),n._v(" "),s("p",[n._v("7.开始搭建多个节点的eureka server，首先模拟出来多个主机，但是都对应本机的ip地址，当然如果有多台服务器的话可以忽略这一步，")]),n._v(" "),s("p",[n._v("8.在终端中输入 sudo vim /etc/hosts\n然后在里边输入\n127.0.0.1 server1\n127.0.0.1 server2\n127.0.0.1 server3\n然后保存退出")]),n._v(" "),s("p",[n._v("9.编写bootstrap.yml文件，在springboot启动过程中，bootstrap的加载顺序是先于application.yml的，所以将erueka的相关配置都写入bootstrap。先把application给注释掉")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("spring:\n  application:\n    name: homepage-eureka\n  profiles: server1\nserver:\n  port: 8000\neureka:\n  instance:\n    hostname: server1\n    prefer-ip-address: false\n  client:\n    service-url:\n      defaultZone: http://server2:8001/eureka/, http://server3:8002/eureka/\n\n---\nspring:\n  application:\n    name: homepage-eureka\n  profiles: server2\nserver:\n  port: 8001\neureka:\n  instance:\n    hostname: server2\n    prefer-ip-address: false\n  client:\n    service-url:\n      defaultZone: http://server1:8000/eureka/, http://server3:8002/eureka/\n\n---\nspring:\n  application:\n    name: homepage-eureka\n  profiles: server3\nserver:\n  port: 8002\neureka:\n  instance:\n    hostname: server3\n    prefer-ip-address: false\n  client:\n    service-url:\n      defaultZone: http://server1:8000/eureka/, http://server2:8001/eureka/\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br")])]),s("p",[n._v("10.将项目打成jar包，在工程根目录下，即imooc-homepage-spring-cloud目录下输入\nmvn clean package -Dmaven.test.skip=true -U，第一次打包的过程显得如此的漫长")]),n._v(" "),s("p",[n._v("12.打包完成后进入homepage-eureka模块的target目录下\n运行\n第一个终端输入\njava -jar homepage-eureka-1.0-SNAPSHOT.jar --spring.profiles.active=server1\n第二个终端输入\njava -jar homepage-eureka-1.0-SNAPSHOT.jar --spring.profiles.active=server2\n第三个终端\njava -jar homepage-eureka-1.0-SNAPSHOT.jar --spring.profiles.active=server3")]),n._v(" "),s("p",[n._v("如果你确认前面的步骤都没有错的话，那么如果在启动的过程中抛出异常的话不用担心，这是因为每一个服务都需要注册到另外的两个服务上，但是另外两服务可能还没有稳定，还没有注册好，如果三个服务都稳定下来，就不会再抛出异常了")]),n._v(" "),s("p",[n._v("13.分别进入三个后台管理页面\n即进入http://127.0.0.1:8000\nhttp://127.0.0.1:8001\nhttp://127.0.0.1:8002\n如果看到了\n"),s("img",{attrs:{src:"https://img.hacpai.com/file/2019/11/image-d627e662.png",alt:"image.png"}}),n._v(" "),s("img",{attrs:{src:"https://img.hacpai.com/file/2019/11/image-89d1eec7.png",alt:"image.png"}}),n._v(" "),s("img",{attrs:{src:"https://img.hacpai.com/file/2019/11/image-9c50f4f2.png",alt:"image.png"}}),n._v("\n就是没问题的")]),n._v(" "),s("p",[n._v("这里说明了homepage-eureka有三个副本，地址分别是下边三个\n"),s("img",{attrs:{src:"https://img.hacpai.com/file/2019/11/image-7934db3b.png",alt:"image.png"}})]),n._v(" "),s("p",[n._v("这里说明了已经注册的副本和可用的副本\n"),s("img",{attrs:{src:"https://img.hacpai.com/file/2019/11/image-5b4997b7.png",alt:"image.png"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);