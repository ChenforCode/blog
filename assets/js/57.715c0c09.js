(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{639:function(s,n,e){"use strict";e.r(n);var a=e(15),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("1.开始修改昨天的bug，")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("toggleCheckAll() {\n                window.console.log(this.checkAllFlag);\n                let flag = !this.checkAllFLag;\n                window.console.log(flag);\n                this.cartList.forEach((item) => {\n                    item.checked = flag;\n                })\n            }\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("用控制台打印，发现\nfalse\ntrue\ntrue\ntrue\n前两个是对的，说明计算属性是没错的，但是后来俩都变成了true，这明显不是计算属性的错误，因为这两个是必须取反的，因此考虑是不是变量写错了。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("window.console.log(this.checkAllFlag);\n                let flag = !this.checkAllFLag;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("结果真尼玛写错了，果然是昨天喝点酒眼睛不好使了，FLag也真有我的。马上改了")]),s._v(" "),e("p",[s._v("2.金额动态计算")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("//总金额计算\n            totalPrice() {\n                let money = 0;\n                this.cartList.forEach((item) => {\n                    if (item.checked) {\n                        money += item.productPrice * item.productNum;\n                    }\n                });\n                return money;\n            }\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("cartList一旦有变化就会重新计算这个money，如果是选中状态，就把他计算金额，单价*数量\n然后把这个金额，绑定到总价的位置即可。顺便可以加上那个currency过滤器格式化金额")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('总价: <span class="total-price">{{totalPrice | currency}}</span>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这里这个动态属性的好处就很明显了，因为影响最终总金额的因素有好多，如果一个一个判断就会非常的麻烦，因此我们就这样想：不管是怎么变，最终的结果都是改变cartList的item的数量或者checked，因此只要对cartList遍历即可。")]),s._v(" "),e("p",[s._v("3.结算按钮动态显示")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("//结算按钮选中\n            checkedCount() {\n                //当数组中有一个true就会返回true，就是和every方法是取反的\n                return this.cartList.some((item) => {\n                    return item.checked;\n                })\n            },\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("然后给结算按钮加上相应的样式即可。由于样式是btn--dis，禁用，所以是返回false的时候才会绑定上这个类，因此要取反，")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<a class="btn btn--red" v-bind:class="{\'btn--dis\': !checkedCount}" @click="checkOut">结算</a>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("即没有商品，返回false，取反变成true，加上这个btn--dis类，按钮禁用")]),s._v(" "),e("p",[s._v("4.结算，这个没什么讲的。。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("//结算\n            checkOut() {\n                //首先判断是否有商品存在，因为即使在禁用状态下也是可以触发这个事件的，那个禁用只是样式的禁用\n                //如果有商品存在，跳转到地址栏页面\n                if (this.checkedCount()) {\n                    this.$router.push({\n                        path: '/address'\n                    })\n                }\n            }\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);