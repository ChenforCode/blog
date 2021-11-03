---
title: Redis安装-配置详解
date: '2020-08-07 10:43:53'
updated: '2020-08-07 10:43:53'
tags:
 - Redis
 - 工具
categories:
 - 2020/202008
---
![](https://img.hacpai.com/bing/20180725.jpg?imageView2/1/w/960/h/540/interlace/1/q/100)

* 首先请确定环境已经安装完毕，可以用如下命令安装和更新相应工具

   ```
   [root@localhost redis-6.0.1]# gcc -v                             # 查看gcc版本
   [root@localhost redis-6.0.1]# yum -y install centos-release-scl  # 升级到9.1版本
   [root@localhost redis-6.0.1]# yum -y install devtoolset-9-gcc devtoolset-9-gcc-c++ devtoolset-9-binutils
   [root@localhost redis-6.0.1]# scl enable devtoolset-9 bash
   以上为临时启用，如果要长期使用gcc 9.1的话：
   [root@localhost redis-6.0.1]# echo "source /opt/rh/devtoolset-9/enable" >>/etc/profile
   [root@localhost redis-6.0.1]# source /etc/profile
   ```

* 以上命令十分关键，不然在编译过程中会报错。
* 去官网下载稳定版的redis压缩包，我下载的是redis-6.0.5.tar.gz

   ```
   [root@localhost local]# cd /usr/local/
   [root@localhost local]# tar -zxvf redis-6.0.5.tar.gz
   [root@localhost local]# cd redis-6.0.5
   [root@localhost local]# make
   [root@localhost local]# make install PREFIX=/usr/local/redis
   ```

* 这个时候redis已经被安装到/usr/local/redis下，进入bin目录可以见到如redis-server等，这个时候就可以直接输入redis-server启动redis服务器，但是这种启动方式启动之后，当前窗口不能关，关了redis自动退出，有点类似于java -jar直接运行一个jar包。需要将redis的启动方式变成守护进程启动。
* 守护进程方式启动redis

   ```
   cp /usr/local/redis-6.0.5/redis.conf /usr/local/redis/bin/

   cd /usr/local/redis/bin

   vim redis.conf

   ./redis-server redis.conf
   ```

* 然后需要将redis.conf中的daemonize no 改为 daemonize yes，接下来启动方式如上命令。
* 将redis变成开机自启动服务
   ```
   vi /etc/systemd/system/redis.service
   ```

* 然后写入以下内容
   ```
   [Unit]
   Description=redis-server
   After=network.target

   [Service]
   Type=forking
   ExecStart=/usr/local/redis-6.0.5/bin/redis-server /usr/local/redis-6.0.5/bin/redis.conf
   PrivateTmp=true

   [Install]
   WantedBy=multi-user.target
   ```
* 注意execStart需要写成自己redis的路径
* 设置开机自启动
```
[root@localhost bin]# systemctl daemon-reload
[root@localhost bin]# systemctl start redis.service
[root@localhost bin]# systemctl enable redis.service
```

* 创建 redis 命令软链接，这个人时候redis就已经是一个系统服务了，输入redis，就可以进入redis的终端。
```
[root@localhost ~]# ln -s /usr/local/redis-6.0.5/bin/redis-cli /usr/bin/redis
```
* redis服务启动停止等相关的操作
```
systemctl start redis.service   #启动redis服务

systemctl stop redis.service   #停止redis服务

systemctl restart redis.service   #重新启动服务

systemctl status redis.service   #查看服务当前状态

systemctl enable redis.service   #设置开机自启动

systemctl disable redis.service   #停止开机自启动
```

* redis图形化客户端，我选用的是Redis Desktop Manager
* 打开->连接到Redis服务器->填写连接名->填写主机->填写密码就可以连接上去redis服务器，这里建议在云服务上搭建一个redis，以服务的形式一直运行，然后你可以在本地的开发环境上安装一个RDM进行redis的管理。
* 配置redis密码，需要打开redis.conf找到requirepass配置项，在后边写入你要设置的密码即可。这种方式需要重启redis服务器。
* 无需重新启动的设置密码方式：
```
redis 127.0.0.1:6379> config set requirepass test123

查询密码：
redis 127.0.0.1:6379> config get requirepass
(error) ERR operation not permitted

密码验证：
redis 127.0.0.1:6379> auth test123
```
* 这个时候在登录redis的时候就必须输入密码才能进入，否则或提示没有authorization。
```
redis 127.0.0.1:6379> auth yourPassword
```
