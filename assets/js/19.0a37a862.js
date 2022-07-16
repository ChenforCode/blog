(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{420:function(t,e,r){"use strict";r.r(e);var i=r(2),a=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h4",{attrs:{id:"集合类不安全问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集合类不安全问题"}},[t._v("#")]),t._v(" 集合类不安全问题")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("相关问题")]),t._v(" "),e("ul",[e("li",[t._v("new ArrayList<Integer>();这条语句是new出来了一个数组")]),t._v(" "),e("li",[t._v("创建了一个默认大小为10的object数组")]),t._v(" "),e("li",[t._v("ArrayList线程不安全的case，多个线程向list中添加元素的时候会出现错误")]),t._v(" "),e("li",[t._v("java.util.concurrentModificationException")])])]),t._v(" "),e("li",[e("p",[t._v("解决并发异常的三个方法")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("new Vector<>();采用Sychronized加锁，并发性很低")])]),t._v(" "),e("li",[e("p",[t._v("List<String> list = Collections.sychronizedList(new ArrayList<>());")])]),t._v(" "),e("li",[e("p",[t._v("CopyOnWriteArrayList的写时复制机制。如果需要新增一个元素，那么首先会创建一个新的，比老array长1的数组，老元素都拷贝过去，然后新元素放到末尾，然后把arraylist的数组设置成新的数组（老的数组就被丢弃了），这个过程是用了reentrantlock加锁。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/ChenforCode/chen-imagebed/master/img/20210311211813.png",alt:"image-20210311211813673"}})])]),t._v(" "),e("li",[e("p",[t._v("写时复制，就是在写入的时候，复制出来一份新的，然后在新的写入，在旧的进行并发读，写入完毕之后将原容器的引用指向新的容器")])])])]),t._v(" "),e("li",[e("p",[t._v("Set的不安全问题的解决办法")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Collections.sychronizedSet(new HashSet<>());")])]),t._v(" "),e("li",[e("p",[t._v("new CopyOnWriteArraySet<>();")])]),t._v(" "),e("li",[e("p",[t._v("这个东西底层是一个CopyOnWriteArraySet，如图")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/ChenforCode/chen-imagebed/master/img/20210311212848.png",alt:"image-20210311212848417"}})])]),t._v(" "),e("li",[e("p",[t._v("HashSet的底层是一个HashMap，set如果add一个元素e，调用的也是hashmap的add方法，如map.add(e, present);e会当做一个key加入map，value是一个默认的object常量。")])])])]),t._v(" "),e("li",[e("p",[t._v("Map的不安全问题的解决办法")]),t._v(" "),e("ul",[e("li",[t._v("ConcurrentHashMap")])])]),t._v(" "),e("li",[e("p",[t._v("栈管运行，堆管存储")])]),t._v(" "),e("li",[e("p",[t._v("这里主要是，str指向常量池中的abc，然后str传入函数，形参str也指向了常量池中的abc，然后形参str又指向了常量池中的xxx，但是实参的指向从来就没变，因此最后的结果是abc。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/ChenforCode/chen-imagebed/master/img/20210311214544.png",alt:"image-20210311214544586"}})])]),t._v(" "),e("li",[e("p",[t._v("上一问，如果传递的是一个对象，那么就会出现形参和实参均指向同一个内存，任何一方修改都会导致两个都变。")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);