---
title: homepage第七期：可用性测试
date: '2019-11-14 21:35:29'
updated: '2019-11-14 21:35:29'
tags:
 - Java
 - SpringCloud
 - homepage系列
categories:
 - 2019/201911

---
![](https://img.hacpai.com/bing/20180215.jpg?imageView2/1/w/960/h/540/interlace/1/q/100)

1.简述网关的作用，以course服务为例，
![image.png](https://img.hacpai.com/file/2019/11/image-1f82d684.png)
如下的服务，如果不通过网关直接访问的话需要的接口地址是
http://127.0.0.1:7001/homepage-course/get/course?id=10
就是自己的端口，自己设置的contextPath，但是如果使用网关的话，访问的接口地址会变成
http://127.0.0.1:9000/chenforcoce/homepage-course/get/course?id=10
变成的zuul网关的接口，还需要加入zuul配置文件中配置的文件

2.对整个项目进行打包
在项目根目录下输入打包命令 mvn clean package -Dmaven.test.skip=true -U
![image.png](https://img.hacpai.com/file/2019/11/image-078b77da.png)
如上图，即为成功

3.之后可以在各自的target目录运行各个服务的jar包

4.另外一种方式就是直接在IDEA中按照顺序启动对应的主函数
尽量按照eureka zuul course user的顺序启动，但是不按照这个顺序也可以，当它们各自稳定下来即可。
![image.png](https://img.hacpai.com/file/2019/11/image-7924d711.png)
在idea中显示四个服务全部启动

5.进入eureka界面，有三个实例
![image.png](https://img.hacpai.com/file/2019/11/image-299a8c9d.png)

6.直接用课程服务的接口地址获取课程
![image.png](https://img.hacpai.com/file/2019/11/image-1264f10c.png)

7.通过网关获取课程
![image.png](https://img.hacpai.com/file/2019/11/image-96efb945.png)

8.其余的测试不再写上去。

9.测试hystrix，即在课程服务不可用的时候，如果访问课程服务，会返回一个空列表。
关闭course服务，然后重新测试访问
![image.png](https://img.hacpai.com/file/2019/11/image-65856591.png)、
这个时候就会返回课程服务中的自定义的hystrix的解决方式，即本地的解决方案
![image.png](https://img.hacpai.com/file/2019/11/image-7c57b2d0.png)

10.完毕






