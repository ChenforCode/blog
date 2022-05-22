(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{643:function(s,e,a){"use strict";a.r(e);var r=a(15),n=Object(r.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://img.hacpai.com/bing/20180725.jpg?imageView2/1/w/960/h/540/interlace/1/q/100",alt:""}})]),s._v(" "),a("ul",[a("li",[a("p",[s._v("首先请确定环境已经安装完毕，可以用如下命令安装和更新相应工具")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[root@localhost redis-6.0.1]# gcc -v                             # 查看gcc版本\n[root@localhost redis-6.0.1]# yum -y install centos-release-scl  # 升级到9.1版本\n[root@localhost redis-6.0.1]# yum -y install devtoolset-9-gcc devtoolset-9-gcc-c++ devtoolset-9-binutils\n[root@localhost redis-6.0.1]# scl enable devtoolset-9 bash\n以上为临时启用，如果要长期使用gcc 9.1的话：\n[root@localhost redis-6.0.1]# echo "source /opt/rh/devtoolset-9/enable" >>/etc/profile\n[root@localhost redis-6.0.1]# source /etc/profile\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("以上命令十分关键，不然在编译过程中会报错。")])]),s._v(" "),a("li",[a("p",[s._v("去官网下载稳定版的redis压缩包，我下载的是redis-6.0.5.tar.gz")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@localhost local]# cd /usr/local/\n[root@localhost local]# tar -zxvf redis-6.0.5.tar.gz\n[root@localhost local]# cd redis-6.0.5\n[root@localhost local]# make\n[root@localhost local]# make install PREFIX=/usr/local/redis\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("这个时候redis已经被安装到/usr/local/redis下，进入bin目录可以见到如redis-server等，这个时候就可以直接输入redis-server启动redis服务器，但是这种启动方式启动之后，当前窗口不能关，关了redis自动退出，有点类似于java -jar直接运行一个jar包。需要将redis的启动方式变成守护进程启动。")])]),s._v(" "),a("li",[a("p",[s._v("守护进程方式启动redis")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cp /usr/local/redis-6.0.5/redis.conf /usr/local/redis/bin/\n\ncd /usr/local/redis/bin\n\nvim redis.conf\n\n./redis-server redis.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("然后需要将redis.conf中的daemonize no 改为 daemonize yes，接下来启动方式如上命令。")])]),s._v(" "),a("li",[a("p",[s._v("将redis变成开机自启动服务")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vi /etc/systemd/system/redis.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("然后写入以下内容")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[Unit]\nDescription=redis-server\nAfter=network.target\n\n[Service]\nType=forking\nExecStart=/usr/local/redis-6.0.5/bin/redis-server /usr/local/redis-6.0.5/bin/redis.conf\nPrivateTmp=true\n\n[Install]\nWantedBy=multi-user.target\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("注意execStart需要写成自己redis的路径")])]),s._v(" "),a("li",[a("p",[s._v("设置开机自启动")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@localhost bin]# systemctl daemon-reload\n[root@localhost bin]# systemctl start redis.service\n[root@localhost bin]# systemctl enable redis.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("创建 redis 命令软链接，这个人时候redis就已经是一个系统服务了，输入redis，就可以进入redis的终端。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@localhost ~]# ln -s /usr/local/redis-6.0.5/bin/redis-cli /usr/bin/redis\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("redis服务启动停止等相关的操作")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("systemctl start redis.service   #启动redis服务\n\nsystemctl stop redis.service   #停止redis服务\n\nsystemctl restart redis.service   #重新启动服务\n\nsystemctl status redis.service   #查看服务当前状态\n\nsystemctl enable redis.service   #设置开机自启动\n\nsystemctl disable redis.service   #停止开机自启动\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[s._v("redis图形化客户端，我选用的是Redis Desktop Manager")]),s._v(" "),a("li",[s._v("打开->连接到Redis服务器->填写连接名->填写主机->填写密码就可以连接上去redis服务器，这里建议在云服务上搭建一个redis，以服务的形式一直运行，然后你可以在本地的开发环境上安装一个RDM进行redis的管理。")]),s._v(" "),a("li",[s._v("配置redis密码，需要打开redis.conf找到requirepass配置项，在后边写入你要设置的密码即可。这种方式需要重启redis服务器。")]),s._v(" "),a("li",[s._v("无需重新启动的设置密码方式：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("redis 127.0.0.1:6379> config set requirepass test123\n\n查询密码：\nredis 127.0.0.1:6379> config get requirepass\n(error) ERR operation not permitted\n\n密码验证：\nredis 127.0.0.1:6379> auth test123\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("这个时候在登录redis的时候就必须输入密码才能进入，否则或提示没有authorization。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("redis 127.0.0.1:6379> auth yourPassword\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);