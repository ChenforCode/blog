---
title: mini-spring第三期：实现mvc包
date: 2019-11-04
tags:
 - Spring
 - Java
 - 框架
 - MiniSpring系列
categories:
 - MiniSpring
---

1.按照spring调度servlet的方式，即需要一个DispatcherServlet，把原来的testServlet修改并让他处理所有的请求，即根目录请求

2.建立mvc包，实现@Controller @RequestMapping @RequestParam三个常用的注解
![image.png](https://img.hacpai.com/file/2019/11/image-4ce11c6a.png)
```
package cn.chenforcode.web.mvc;

import java.lang.annotation.*;

@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface Controller {
}

```
```
package cn.chenforcode.web.mvc;

import java.lang.annotation.*;

@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface RequestMapping {
    String value();
}

```
```
package cn.chenforcode.web.mvc;

import java.lang.annotation.*;

@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.PARAMETER)
public @interface RequsetParam {
    String value();
}

```

3.在测试模块下建立controllers包进行测试
```
package cn.chenforcode.controllers;

import cn.chenforcode.web.mvc.Controller;
import cn.chenforcode.web.mvc.RequestMapping;
import cn.chenforcode.web.mvc.RequsetParam;

@Controller
public class SalaryController {
    @RequestMapping("/get_salary.json")
    public Integer getSalary(@RequsetParam("name") String name, @RequsetParam("experience") String experience) {
        return 10000;
    }
}

```

4.这个时候虽然使用了这些注解，但是并没有实际的作用，因为框架是仍然不知道这些注解和这些类的存在的，所以必须建立一个类夹在机制，扫描所有的包！

