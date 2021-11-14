(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{566:function(e,l,v){"use strict";v.r(l);var _=v(12),i=Object(_.a)({},(function(){var e=this,l=e.$createElement,v=e._self._c||l;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h4",{attrs:{id:"线程池"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线程池"}},[e._v("#")]),e._v(" 线程池")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("新建线程的几个方法")]),e._v(" "),v("ul",[v("li",[e._v("实现Runnable接口，重写run方法")]),e._v(" "),v("li",[e._v("new一个thread")]),e._v(" "),v("li",[e._v("实现Callable接口，带返回值")])])]),e._v(" "),v("li",[v("p",[e._v("Callable的过程")]),e._v(" "),v("ul",[v("li",[e._v("实现一个自己的线程类，实现callable接口")])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/Chenforcode/chen-imagebed/raw/master/img/20210417222619.png",alt:"image-20210417222619752"}})]),e._v(" "),v("ul",[v("li",[e._v("构造一个FutureTask，传入实现callable接口的类")])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/Chenforcode/chen-imagebed/raw/master/img/20210417222705.png",alt:"image-20210417222705966"}})]),e._v(" "),v("ul",[v("li",[e._v("将FutureTask传入thread，正常启动即可，最后可以通过futureTask.get()获取返回值")]),e._v(" "),v("li",[e._v("FutureTask构建需要一个callable，然后自己又实现了runnable，即是runnable的子类")]),e._v(" "),v("li",[e._v("所以就是new thrad(futuretask(callable));")]),e._v(" "),v("li",[e._v("FutureTask的作用就是在一个任务在一系列的计算中没有先要执行的必要性，并且他的计算十分耗时，因此可以为其单独开一个线程单独计算，然后其余任务正常运行，运行完了之后单独等待Future的结果，然后合并。主要是因为他有个返回值，可以带回来返回结果！")]),e._v(" "),v("li",[e._v("get方法建议放在最后，就是让其余线程完毕之后再取get的结果，否则直接取get，如果还没算完就会阻塞，影响其他线程运行。这样也就和我们的单独开线程计算的初衷背离了")]),e._v(" "),v("li",[e._v("一个FutureTask只会被算一次，即使传入两个线程都运行，也只会运行一次，如果想运行两次，需要是两个不同的futureTask")])])]),e._v(" "),v("li",[v("p",[e._v("线程池的优势")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("线程池的思想和spring的思想很像，是利用了一个工厂模式，提前把线程给创好，你用的时候直接拿就可以了，不用自己new")])]),e._v(" "),v("li",[v("p",[e._v("Executors.newFixedThreadPool，固定数目线程的线程池")])]),e._v(" "),v("li",[v("p",[e._v("Executors.newSingleThreadPool，一个池子只有一个线程")])]),e._v(" "),v("li",[v("p",[e._v("Executors.newCachedThreadPool，自己根据请求的数量进行自动扩容。")])]),e._v(" "),v("li",[v("p",[e._v("线程池的七个参数")]),e._v(" "),v("ul",[v("li",[e._v("corePoolSize，线程池中的常驻核心数。即在该线程池中会一直可以处理请求的线程数目。")]),e._v(" "),v("li",[e._v("maxinumPoolSize，线程池支持能够处理的最大线程数，即corePoolSize满了，就需要扩容，所能够扩到的最大数目")]),e._v(" "),v("li",[e._v("keepAliveTime：多余的空闲线程存活时间，即被扩容的线程如果一直空闲，将会被回收，直到剩余的数量等于coresize")]),e._v(" "),v("li",[e._v("unit，时间的单位")]),e._v(" "),v("li",[e._v("workQueue，类似于候客区，存放还需要执行，但是线程被用完了，的任务")]),e._v(" "),v("li",[e._v("threadFactory，线程池中用来生成线程的工厂，一般用默认即可")]),e._v(" "),v("li",[e._v("handler，拒绝策略，当阻塞队列和线程数都已经满了，会拒绝新的请求进入，当然这个策略有很多种。\n"),v("ul",[v("li",[e._v("abortpolicy，直接抛出异常")]),e._v(" "),v("li",[e._v("callerrunspolicy，将任务回退到调用者")]),e._v(" "),v("li",[e._v("discardOldestpolicy，抛弃队列中等待最久的任务。")]),e._v(" "),v("li",[e._v("discard，直接丢弃任务")])])]),e._v(" "),v("li",[e._v("Executors提供的三种线程池在实际生产中是不允许使用的，因为其提供的阻塞队列可以看成是无界的阻塞队列或者最大长度为Integer.max所以大量的请求堆积会导致oom，因此一般需要自己手动创建线程池并指定参数")]),e._v(" "),v("li",[e._v("线程池所能容纳的最大请求数为max+queue。即正在处理的请求max和正在等待的请求数queue")])])]),e._v(" "),v("li",[v("p",[e._v("如何合理的配置线程池的参数")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("首先要知道目前机器的运行核心数目")])]),e._v(" "),v("li",[v("p",[e._v("cpu密集型：核数+1，因此此时cpu在高速运转，尽量减少上下文切换即可。")])]),e._v(" "),v("li",[v("p",[e._v("io密集型：大部分线程都在阻塞，所以线程可以尽可能的多（真的在占用cpu的很少）")]),e._v(" "),v("ul",[v("li",[e._v("核心数*2")]),e._v(" "),v("li",[e._v("核心数 / (1 - 阻塞系数)")])]),e._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/Chenforcode/chen-imagebed/raw/master/img/20210427150306.png",alt:"image-20210427150306799"}})])])])])])])])])}),[],!1,null,null,null);l.default=i.exports}}]);