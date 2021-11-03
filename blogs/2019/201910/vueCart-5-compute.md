---
title: 计算属性-金额的动态计算
date: '2019-10-27 23:30:41'
updated: '2019-11-06 20:45:22'
tags:
 - vue
 - vue-cart系列
categories:
- 2019/201910
---
1.计算属性，因为在初始化状态下，所有商品的选中状态是不确定的，所以无法确定那个全选按钮是否点亮，因此需要一个计算属性。
```
computed: {
            checkAllFlag() {
                //当数组中的所有对象返回true的时候才会返回true
                return this.cartList.every((item) => {
                    return item.checked;
                })
            }
        },
```
2.判断是否应该点亮全选
```
//全选和反选
            toggleCheckAll() {
                let flag = !this.checkAllFLag;
                this.cartList.forEach((item) => {
                    item.checked = flag;
                })
            }
```
全选的标志类
```
<span class="checkbox-btn item-check-btn" v-bind:class="{'checked': checkAllFlag}">
```
也就是说，如果全部都是true的时候，flag就被置为false，所有的图标就变过来了。
初始化的时候全选为false不亮。





今天先写到这里吧，有点累了。。。还是有一个bug没有写完。就是点击全选之后是成功的，但是反选是失败的。
以后必须再也不喝酒了，一滴酒也不碰了！
明天加油！
