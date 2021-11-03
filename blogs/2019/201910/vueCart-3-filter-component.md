---
title: 过滤器，事件，插槽与父子组件传递
date: '2019-10-26 14:11:40'
updated: '2019-11-06 20:44:59'
tags:
 - vue
 - vue-cart系列
categories:
- 2019/201910
---
1.编写editCart函数，使得能够修改商品数量和选中状态。
```
<a class="input-sub" v-on:click="editCart('minus', item)">-</a>
```
其中editCart函数可以直接传递参数，第一个参数代表加还是减，第二个参数是这个商品本身。
加法也同理。
同样checked也是这样，在函数中把他取反就可以了
2.编写过滤器
```
filters: {
            currency(value) {
                if (!value) return 0.00;
                return "¥" + value.toFixed(2) + "元";
            }
        },
```
3.使用过滤器：
```
<div class="item-price-total">{{item.productNum*item.productPrice | currency}}</div>
```
这样就会把这里边的那个数据格式化成为想要的格式。注意使用过滤器的时候只写过滤器的名字就行了，不能写成currency()这种形式。
4.插槽
在modal组件中编写一个插槽
```
<slot name="message"></slot>
```
在使用插槽的地方使用插槽
```
<modal>
      <p slot="message">请问你你要删除此条元素吗</p>
</modal>
```
插槽的本质就是在一个组件里预留出来位置，然后在使用该组件的时候可以动态的向预留的位置中添加想要添加的东西。
4.控制modal的显示和关闭
首先为modal绑定一个属性来控制关闭还是打开
```
<modal :mdShow="modalConfirm">
```
这个变量modalConfirm必须在data里边定义
接下来点击删除按钮，出来确认弹框：
```
<a href="javascript:;" class="item-edit-btn" @click="delCartConfirm(item)">
```
```
//删除商品，打开对话框
            delCartConfirm(item) {
                //准备删除的对象
                this.delItem = item;
                this.modalConfirm = true;
            }
```
删除modal.vue中的display：none属性

接下来是如何把mdShow这个属性从cart传递给modal，首先在modal的props中定义这个属性

在子组件中定义弹框的关闭事件，但是不是直接关闭，而是调用父组件传参进行关闭
```
<button class="md-close" @click="closeModal">关闭</button>
```
```
methods: {
            closeModal() {
                this.$emit('close');
            }
        }
```
父组件中如何接受这个close
```
<modal :mdShow="modalConfirm" @close="closeModal">
```
```
closeModal() {
                this.modalConfirm = false;
            }
```
最后把md-show这个类用mdShow这个元素绑定上去
```
<div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show': mdShow}">
```

这一部分比较混乱，现在来捋一捋。首先按照顺序，正向，点击删除按钮，弹出对话确认框，触发delCartConfirm事件，modalConfirm变成true，接着mdShow也变成true，mdShow传递给子组件modal里，创建那个md-show类，显示出来对话框。

接着对话框打开之后如何关闭。首先modal里边的关闭按钮触发关闭事件closeModal，该函数调用了emit，即调用父组件传递给一个close参数，接着在父组件中寻找@close，然后触发父组件的closeModal事件，把modalConfirm变成false，接着mdShow也变成false，这个就同上，删除md-show的类，对话框消失。

今天天气好冷啊。。。。😣

