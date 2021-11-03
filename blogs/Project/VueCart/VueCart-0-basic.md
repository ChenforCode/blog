---
title: Vue基础和项目基础架构
date: 2019-10-24
tags:
 - Vue
 - VueCart系列
 - Project
categories:
 - Project
---

1.每一个.vue文件都可以理解成一个组件，在他内部有data，有如下一些函数，分别存在于vue的各个生命周期中。
```
beforeCreate() {

  },
  created() {

  },
  mounted() {

  },
  beforeMount() {

  },
  updated() {

  },
  beforeUpdate() {

  },
  destroyed() {

  },
  beforeDestroy() {

  }
```
2.同时vue存在好el和data两个对象，其中el对象是整个的vue对象，只有在mounted（渲染之后）才会出现，data对象是存储这个vue中的数据，在created之后会出现。这部分都可以类比微信小程序的onShow方法，data对象等等。
3.发现一个小插曲，即在vue中的js代码中必须使用window.console.log()而非console.log()。经过百度之后，解决办法是在package.json中加入
```
"rules":  {
	"no-console": "off"
}
```
这样的话在ws中的报错会消失，但是在项目打包的时候仍然会报错，因此暂时先使用window
4.项目的一些相关规范
components放组件，大写
pages放页面，小写
assets放一些静态资源，如css和imgs
5.利用vue cli这个页面安装相关的依赖
vue-rounter，axios， vue-axios三个依赖
6.建立路由，即router.js，注意是new Router，这个地方和网上犯的错误一模一样
```
import Vue from "vue"
import Router from "vue-router"
import Cart from ".pages/cart"
import Address from "./pages/address";
Vue.use(Router)
export default new Router({
    routes:[
        {
            path: "/",
            name: "cart",
            component: Cart
        },
        {
            path: "/address",
            name: "address",
            component: Address
        }
    ]
})
```
7.这个时候编译报错，发现是axios没有安装上去，当我再次安装的时候还是安装不上去，因此直接采用如下方式来安装，成功！
```
npm install axios --save
```
8.先创建router.js，然后在main.js里边导入router，使用router，最后在app.vue里边使用router-view
9.这个时候已经可以通过/访问到cart页面，通过/address访问到address页面，但是会有一个小小的瑕疵，就是提示你address是html的标签， 尽量不用重复，这个时候给vue组件换一个名字就醒了。
10.做一些项目的配置，自定义配置
建立vue.config.js，可以更改一些默认的配置，如主机，端口，代理等等
```
module.exports = {
    publicPath: '',
    devServer: {
        host: "localhost",
        port: 9090,
        proxy: {
            '/mock': {
                target: "http://localhost:9090",
                ws: false,
                changeOrigin: false
            }
        }
    }
}
```
