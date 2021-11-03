---
title: 父子组件传递2
date: '2019-10-26 21:25:02'
updated: '2019-11-06 20:45:14'
tags:
 - vue
 - vue-cart系列
categories:
- 2019/201910
---
1.完成上节课的两个剩余的功能：
点击关闭，对话框关闭；点击遮罩层，对话框关闭
第一个的click事件当然也可以调用closeModal函数，但是这样的表达式写法会更加的简单方便。所以采用第一种方式。
```
<a class="btn btn--m btn--red" href="javascript:;" @click="modalConfirm=false">关闭</a>
```
```
<div class="md-overlay" v-if="mdShow" @click="closeModal"></div>
```

2.采用vue3.0的新插槽写法
```
	<modal :mdShow="modalConfirm" @close="closeModal">
            <template v-slot:message>
                <p>请问你你要删除此条元素吗</p>
            </template>
            <template v-slot:btnGroup>
                <a class="btn btn--m" href="javascript:;">确认</a>
                <a class="btn btn--m btn--red" href="javascript:;" @click="modalConfirm=false">关闭</a>
            </template>
        </modal>
```
这样写的好处是不需要额外的div，如果多了一层div可能会造成css样式错位
3.完成删除的功能
理解原理，购物车的商品时从cartList中循环渲染出来的，所以只要把对应的item在cartList中删除即可
```
//删除购物车的数据
            delCart() {
                let delItem = this.delItem;
                this.cartList.forEach((item, index) => {
                    if (delItem.productId == item.productId) {
                        //删除
                        this.cartList.splice(index, 1);
                        //关闭弹框
                        this.modalConfirm = false;
                    }
                })
            }
```
遍历整个list，如果某个item的id和delitem的id是一致的，那么就把他删除。

我发现Mac这电脑发热真的很严重啊，就打开一个webstorm， n个网站，一个视频，感觉发热很严重。。。emmm
好了好了今天的任务完成了，明天有重要的事情，现在就关闭电脑去忙啦！！！
明天继续加油。
