---
title: 计算属性2，金额动态计算，路由跳转
date: 2019-10-28
tags:
 - Vue
 - VueCart系列
 - Project
categories:
 - Project
---

1.开始修改昨天的bug，
```
toggleCheckAll() {
                window.console.log(this.checkAllFlag);
                let flag = !this.checkAllFLag;
                window.console.log(flag);
                this.cartList.forEach((item) => {
                    item.checked = flag;
                })
            }
```
用控制台打印，发现
false
true
true
true
前两个是对的，说明计算属性是没错的，但是后来俩都变成了true，这明显不是计算属性的错误，因为这两个是必须取反的，因此考虑是不是变量写错了。
```
window.console.log(this.checkAllFlag);
                let flag = !this.checkAllFLag;
```
结果真尼玛写错了，果然是昨天喝点酒眼睛不好使了，FLag也真有我的。马上改了

2.金额动态计算
```
//总金额计算
            totalPrice() {
                let money = 0;
                this.cartList.forEach((item) => {
                    if (item.checked) {
                        money += item.productPrice * item.productNum;
                    }
                });
                return money;
            }
```
cartList一旦有变化就会重新计算这个money，如果是选中状态，就把他计算金额，单价*数量
然后把这个金额，绑定到总价的位置即可。顺便可以加上那个currency过滤器格式化金额
```
总价: <span class="total-price">{{totalPrice | currency}}</span>
```
这里这个动态属性的好处就很明显了，因为影响最终总金额的因素有好多，如果一个一个判断就会非常的麻烦，因此我们就这样想：不管是怎么变，最终的结果都是改变cartList的item的数量或者checked，因此只要对cartList遍历即可。

3.结算按钮动态显示
```
//结算按钮选中
            checkedCount() {
                //当数组中有一个true就会返回true，就是和every方法是取反的
                return this.cartList.some((item) => {
                    return item.checked;
                })
            },
```
然后给结算按钮加上相应的样式即可。由于样式是btn--dis，禁用，所以是返回false的时候才会绑定上这个类，因此要取反，
```
<a class="btn btn--red" v-bind:class="{'btn--dis': !checkedCount}" @click="checkOut">结算</a>
```
即没有商品，返回false，取反变成true，加上这个btn--dis类，按钮禁用

4.结算，这个没什么讲的。。
```
//结算
            checkOut() {
                //首先判断是否有商品存在，因为即使在禁用状态下也是可以触发这个事件的，那个禁用只是样式的禁用
                //如果有商品存在，跳转到地址栏页面
                if (this.checkedCount()) {
                    this.$router.push({
                        path: '/address'
                    })
                }
            }
```
