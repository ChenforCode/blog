---
title: Work point
date: 2022-08-31
tags:
 - Java
 - 后端工程师
 - Work
categories:
 - Java
---

### 问题记录

* jpa的多条件查询，分页查询，排序，可以单独出一章去记录一下

* 分页查询的几个关键参数，前端传页码，页大小，后端返回content，totalElements或者是totalPages，totalPages就是总数/页大小向上取整。即9.5页是10页

* docker拉取的openjdk镜像，在使用poi的时候会产生字体相关的一个空指针

  ![image-20220831112429343](https://raw.githubusercontent.com/ChenforCode/chen-imagebed/master/img/image-20220831112429343.png)

    * 解决方案就是换个jdk
    * 或者可以在build img的时候把字体相关的配置安装上去