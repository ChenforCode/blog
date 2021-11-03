---
title: safari 浏览器的 Invalid date 问题
date: 2020-06-26
tags:
 - Safari
 - Vue
 - Java
categories:
 - Java
---

![](https://img.hacpai.com/bing/20181207.jpg?imageView2/1/w/960/h/540/interlace/1/q/100)

![](https://img.hacpai.com/file/2020/03/image-441f9d63.png?imageView2/2/interlace/1/format/webp)

![](https://img.hacpai.com/file/2020/03/image-891357ab.png?imageView2/2/interlace/1/format/webp)

但是如下不会出现：

![](https://img.hacpai.com/file/2020/03/image-1572f643.png?imageView2/2/interlace/1/format/webp)

Safari 浏览器处理 YYYY-M-D 类型会出现这个错误，也就是说，如果日期是 个位数的月份和日期，需要在前边补零。这个问题在 Chrome 浏览器中不存在
