---
title: 组件拆分
date: '2019-10-25 13:25:51'
updated: '2019-11-06 20:44:52'
tags:
 - vue
 - skill
 - vue-cart系列
categories:
- 2019/201910
---
![](https://img.hacpai.com/bing/20181123.jpg?imageView2/1/w/960/h/540/interlace/1/q/100)

1.首先学习一下如何安装sublime插件，首先需要安装package control。方法如下
下载一个安装包：链接: https://pan.baidu.com/s/1-imFUClj2yyEnDJI7hPZIg 提取码: mfcw，把它直接拖拽到sublime的安装目录，Mac下的查看目录方法为，sublime-》preferences-》browse packages 打开之后当前目录就是安装目录，把刚才下载的文件拖进去。然后进入sublime，键入command + shift + p，出现对话框之后输入package control回车，等待几秒钟之后如果出现了package control install successfully类似的话，就说明安装成功了。
2.一些小技巧，文件夹直接拖入，或者用sublime直接打开文件夹的话，会在左侧显示出目录树，很方便进行管理。如果没有显示可能是设置隐藏了，需在sublime-》view-》silde bar-》hide slide bar 点击即可。command 加上 +可以改变sublime的字体大小。另外，直接退出关闭sublime，再次打开的时候上次的项目就没了，这个时候可以采用command + q的方式退出
3.正式开始编写代码了，首先将写好的静态页面的header，footer，modal，cart主页面复制到相应的vue文件中，这里注意，每一个vue文件的template模版中必须只有一个根div，如果出现了两个并列的div就必须在写一个div包住他们两个。
4.引入相应的图片和样式，放入public和assert都行，如果是public，那么访问他的路径为/***，即在根路径下访问，如果是asserts，就必须用相对路径。另还需要在main.js里边引入，这里边必须用相对路径，所以将css文件放到assert里。在main.js里边的写法如下
```
import './assets/css/base.css'
import './assets/css/index.css'
```
这个时候再去访问localhost:9090就可以访问到cart页面了
5.引入组件
在哪个页面引入其他的组件就在相应的vue中写，首先引入相应的组件
```
import NavHeader from "./../components/Header"
import Modal from "./../components/Modal"
import NavFooter from "./../components/Footer"
```
之后在compoents中写入引入的组件，这个地方的注释是防止不使用该组件的时候会编译错误
```
components: {
            NavFooter,
            NavHeader,
            // eslint-disable-next-line vue/no-unused-components
            Modal
        }
```
6.使用组件，这个时候就可以在cart的vue页面中使用该组件，但是记住，引入的虽然是NavHeader大写，但是写标签的时候要转化成相应的小写+横线的形式。如nav-header。
address页面同上。
7.尝试着将内容部分的面包屑导航也封装起来做成组件。
