---
title: VoiceCare重启改造1
date: 2019-11-03
tags:
 - SpringBoot
 - Java
categories:
 - Java
---

1.改造配置文件，将原本的一份文件分开变成开发环境和生产环境两个文件
将数据库的配置和ssl的相关配置分开写到开发环境和生产环境中
在主配置文件中默认使用开发环境的配置

2.不再使用@RequsetBody注解，均采用json形式和x-www-form-urlencoded的方式

