---
title: mini-spring第六期：理解和debug
date: 2019-11-08
tags:
 - Spring
 - Java
 - 框架
 - MiniSpring系列
 - Project
categories:
 - Project
---

1.首先仍然是参数接收问题，老实觉得老师的代码写的是有问题的，
![image.png](https://img.hacpai.com/file/2019/11/image-a34e8894.png)
就是在handle方法中用这种方式准备invoke的参数有什么用吗？？我想了好长时间，这个args里边存放的只是参数的名字。但是invoke要传递的参数是参数的值。所以后来我就想了上边这种写法，根据参数名称（key）从request里边获取，然后这样写完，打包运行，得到如下结果
![image.png](https://img.hacpai.com/file/2019/11/image-68634ee4.png)
对，他是说我调用invoke的那一行出现了空指针错误，然后初步判断就是参数为空或者是controller是空的。

2.开始dubug，打印参数，重新运行是没问题的，那接下来肯定就是哪个controller有问题了。由于以前是直接newInstance是没问题的，现在换成了依赖注入模式就出了问题，所以目前肯定是beanFactory写的有问题。

3.然后就准备在主函数的bean初始化之后输出一下beanfactory创建的bean，然后我就发现，自己根本就没有写初始化，emmm我可真是个憨憨
![image.png](https://img.hacpai.com/file/2019/11/image-e3a8f488.png)

4.于是我就写上初始化，在遍历一次
发现抛出了一个异常，是在初始化时候自己抛出来的，就是出现了循环依赖的异常，所以就没有再往下执行了。
然后再次查看beanFactory的代码
![image.png](https://img.hacpai.com/file/2019/11/image-3e446a5d.png)
终于发现了错误，这个地方是我理解错我了，其实beanFactory中put进去的是一个对象，所以在put之前这个对象的所有属性都必须是装配完毕的（如果可以装配完毕，也即是没有返回false），所以必须在for循环执行完毕之后。
因此需要把大红色箭头的代码挪到下边。如下图
![image.png](https://img.hacpai.com/file/2019/11/image-5d3f5711.png)

5.再次打包运行
![image.png](https://img.hacpai.com/file/2019/11/image-b17921ed.png)
终于正常返回结果了。

6.至此，这个mini-spring框架算是完成了。完成了spring和springmvc的基本功能。但是仅仅是基本功能，整体上来说还是十分粗糙的，例如没有进行相应的异常处理。




