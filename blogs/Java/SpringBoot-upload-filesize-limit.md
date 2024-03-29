---
title: SpringBoot上传文件大小限制问题
date: 2020-04-12
tags:
 - Spring
 - SpringBoot
 - Java
 - 后端工程师
categories:
 - Java
---

![](https://img.hacpai.com/bing/20180104.jpg?imageView2/1/w/960/h/540/interlace/1/q/100)

1.背景问题：SpringBoot 限制文件大小上传的位置一共有两处如下图。

![image.png](https://b3logfile.com/file/2020/06/image-5a18cb08.png)

一个是上方在 servelt 配置的单个文件上传大小限制（紧挨这的是请求的最大大小）假设为 s-size，第二个是 下方的 Tomcat 的最大吞吐量大小限制，假设为 t-size。

2.问题描述

在上传文件大小在超过 s-size 但没有超过 t-size 的是否抛出的异常为：

org.apache.tomcat.util.http.fileupload.impl.FileSizeLimitExceededException: The field uploadFile exceeds its maximum permitted size of 1048576 bytes.

在超过了 t-size 的时候会抛出异常：

org.apache.tomcat.util.http.fileupload.impl.SizeLimitExceededException: the request was rejected because its size (26770964) exceeds the configured maximum (20971520)

但是这两个异常均无法被捕获，而且会直接造成服务器 500 错误，这里说的无法被捕获的意思是根据这两个异常写出对应的异常处理方法，但是该方法不会被执行。如下图，写了全局异常处理方法，但是不会执行，仍然后在控制台报错。

![image.png](https://b3logfile.com/file/2020/06/image-c814fba9.png)

3.对于第一种异常，即超过了 s-size 但是没有超过 t-size 的情况，不采用上述异常处理，而是用下图的处理方式，也就是，捕获 MaxUploadSizeExceededException 这个异常。可以正常处理，也可以正常的返回给前端相应地报错信息。（疑问点，FileSizeLimitExceededException 和 Max 异常是什么关系，问什么超出文件限制控制台报错 FileSizeLimitExceededException，但是要通过捕获 Max 才能解决）

![image.png](https://b3logfile.com/file/2020/06/image-2a3ee7e0.png)

但是对于第二种异常，即超过 t-size 的情况，没能通过上述方式解决。

4.虽然没搞懂，但是仍然找到了解决方案。因为第二种情况的异常不能捕获，那就想办法不让他出现。该异常的出现是由于超出了 Tomcat 限制的大小，那么可以选择如下设置 。这样的话不会限制 Tomcat 限制文件上传的大小。

![image.png](https://b3logfile.com/file/2020/06/image-1b0f91ce.png)

而是把限制文件上传大小的工作交给下图的配置来做，这样不但限制了文件大小，同时也可以正常的捕获 exceed 的异常

![image.png](https://b3logfile.com/file/2020/06/image-5c4d5fee.png)
