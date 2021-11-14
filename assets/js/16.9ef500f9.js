(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{561:function(a,t,s){"use strict";s.r(t);var n=s(12),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h4",{attrs:{id:"cas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cas"}},[a._v("#")]),a._v(" CAS")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("CAS是什么？比较并交换compareAndSet。即在更新值之前必须和expect比较，是否该值被修改过，未被修改，则更新成，否则更新失败。有点类似于git推送时候，必须保证远程仓库没人修改，否则会出现冲突推送失败，需要先pull下来更新本地代码")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//如果当前atomicInt的值是第一个5（expect期望值），那么久更新为2019，否则不更新。这里是为了保证，该线程在将2019写回主内存时，这个atomic的值并没有其他线程修改过，也就还是5.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AtomicInteger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\natomicInt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("compareAndSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2019")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("CAS的作用就是和Sychronized一样，保证同步，只不过他比Sychronized要轻量级")])]),a._v(" "),s("li",[s("p",[a._v("CAS的原理")]),a._v(" "),s("ul",[s("li",[a._v("CAS全称Compare-And-Swap，它是一条CPU并发原语。调用UnSafe类中的CAS方法，JVM会帮我们实现出CAS汇编指令，是一种完全依赖与硬件的功能，通过它实现的原子操作。原语的执行必须是连续的，在执行过程中不允许被中断。")]),a._v(" "),s("li",[a._v("atomic-》使用unsafe类-》cas原语-》汇编原子操作")]),a._v(" "),s("li",[a._v("查看getAndIncrement源码，首先是调用了unsafe的getAndAddInt方法，该方法的实现为，var1是当前对象（当前对象指的是atomic这个对象），var2是当前内存地址，var5是当前从该内存地址获取的值。var4是要加的数值1。首先do内先获取var5，即内存里的值，然后在compareAndSwapInt中会再次获取var1中的var2对象的var5值，即内存地址里的值，和刚才获取的var5（期望值去比较），如果相等，则将内存里的值update为var5 + var4，然后返回var5（未加之前的值，因为是i++，但此时内存里已经加一了）。如果当前内存里的值和var5（期望值）不相等（说明有人动过这个值），那么返回false，取反为true，再次循环，取得新的var5，去再次更新。")]),a._v(" "),s("li",[a._v("就是说。。假如i=5，第一个线程执行，i++，首先获得i = 5，然后在执行++时候，第二个线程提前加上了i=6，那么第一个线程的真实值6和期望值5不同，那么就不能执行++操作，需要重新获取i = 6（这里需要保证i是一个volatile，即第二个线程修改了之后，第一个线程会立即知道，这个时候重新get，就能得到6），然后执行++操作变成7")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/Chenforcode/chen-imagebed/raw/master/img/20210309141010.png",alt:"image-20210309141010736"}})]),a._v(" "),s("ul",[s("li",[a._v("unsafe类中的cas方法，例如上述将的++方法，JVM会帮我们实现出CAS汇编指令。这也就是为什么这些代码可以连续执行，不允许被中断")])])]),a._v(" "),s("li",[s("p",[a._v("CAS的缺点：")]),a._v(" "),s("ul",[s("li",[a._v("Sychronized是给并发代码加锁，同一时间只能有一个线程进入，并发性降低")]),a._v(" "),s("li",[a._v("CAS不加锁，可以有多个线程同时操作，就是在修改主存中的值的时候，需要先比较。")]),a._v(" "),s("li",[a._v("循环给CPU带来很大的开销")]),a._v(" "),s("li",[a._v("只能保证一个变量的同步操作，因为该段代码是存在于atomic对象中的，这个代码只能保证这一个对象的同步，不能保证两个。")]),a._v(" "),s("li",[a._v("ABA问题")])])]),a._v(" "),s("li",[s("p",[a._v("ABA问题")]),a._v(" "),s("ul",[s("li",[a._v("CAS算法实现的一个重要前提是去除内存中某个时刻的数据，和当前时刻的数据相比较，如何相同，就可以替换新值，而就在这个时间差内，会导致数据的变化。")]),a._v(" "),s("li",[a._v("比如线程1取出值为A，线程2取出值为A，修改为B并写回，然后又修改为A写回，这个时候线程1进行某些操作修改写回时候，比较仍然是A，但是中间已经被修改过数据。这个问题就叫做ABA问题")])])]),a._v(" "),s("li",[s("p",[a._v("原子引用")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("普通的原子类只能对简单的类型，如int，boolean等等，原子引用是用来解决一个复杂类型的实现。如下代码实现，就是将user1包装成一个原子引用，如果期望值和真实值一样，块就可以update成为user2")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AtomicReference")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" refer "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AtomicReference")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nrefer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("user1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nrefer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("compareAndSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("user1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" user2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])])])])]),a._v(" "),s("li",[s("p",[a._v("如何规避ABA问题")]),a._v(" "),s("ul",[s("li",[a._v("时间戳：原始都是5-1，t2修改成为6-2，然后改回5，变成5-3，这个时候虽然值是一样的，但是时间戳不一样，就能判断值不一样。。t1修改成为7-2，然后用期望值5-1和真实值5-3对比，发现不一样，需要先拉取最新的5-3。记得需要先判断时间戳。")]),a._v(" "),s("li",[a._v("AtomicStampReference.compareAndSet(expVal, updateVal, expStamp, newStamp);只有值和时间戳都一样的时候才会更新成功。")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);