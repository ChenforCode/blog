---
title: 内网穿透与Frp的使用
date: 2022-05-27
tags:
 - Frp
 - 后端工程师
 - 工具
 - Guide
categories:
 - Guide
---

## 内网穿透与Frp的使用

### 什么是公网和内网

* 仍然是说一下自己的理解，首先外网，我们认为是所有人都可以访问到的，例如www.baidu.com，这个域名后边对应着很多云服务器，每一台云服务器有自己的公网ip，我们可以通过这个ip或者和ip绑定到的域名访问到这台机器上的服务。
* 内网，或者叫做局域网，一般是公司内部，或者家里的网络，例如在同一个wifi下的两台服务器，是可以做到互相通信的，例如192.168.x.1和192.168.x.2一般是可以互相访问到的，但是这个是路由器转发出来的局域网，对于外边的人是不能通过这个ip访问到这台机器的。

### 需求是什么

* 对于一个服务，如果我们想让所有人都访问得到，我们会购置一台公网服务器，即有公网ip的服务器，把服务放到上边去。那假如在开发初期，服务仍未上线的时候，就有一定的需求需要从外网访问到我们内部的服务呢？例如想让一个人远程调试一下我们本地的接口。或者是阿里微信支付的回调请求，由于是阿里服务器给我们发请求，那么必须是它能够访问得到得地址，但如果此时我们是局域网得服务，阿里怎么能访问到呢？
* 此时需求就出现了，我们需要把公网无法访问得到的内网服务，变成能够通过公网访问的到。

### 内网穿透

* 内网穿透的百科定义：

  内网穿透，也即 NAT 穿透，进行 NAT 穿透是为了使具有某一个特定源 IP 地址和源端口号的数据包不被 NAT 设备屏蔽而正确路由到内网主机。其实这个名字就比较形象了，即从公网过来的请求，直接穿透内网，到达内网内部的服务。

* 原理

  * 服务器中转穿透

    局域网中的服务器A不能被公网访问到，但是局域网是可以访问到公网的。因此可以提前准备好一个公网服务器B，让内网服务器持续主动的访问这台公网服务器，类似于图中的心跳包的箭头，内网服务器A和公网服务器B一直保持连接，类似于建立了一个通道。然后另外一个服务器C想访问到服务器A，那么首先可以访问服务器B，然后服务器将C的请求利用提前建立好的隧道转发给A，然后A的相应原路返回到服务器B，然后B再返回给服务器C。

    ![2062669-20200614002855017-521361250](https://raw.githubusercontent.com/ChenforCode/chen-imagebed/master/img/2062669-20200614002855017-521361250.png)

  * 点对点穿透

    中转穿透比较简单，但是缺点就是AC之间的所有数据传输都要经过B，如果服务器多了起来，对于B来说压力会增大。因此出现了这种P2P的穿透方法。点对点的穿透实现方法有UDP打洞和TCP打洞。我们先讲UDP打洞。UDP打洞主要是想让AC两台服务器在各自的NAT网关处建立一个映射表，让二者互相知道自己的公网和内网地址。这个映射表的建立仍然需要一个中转服务器的帮助，具体的步骤如下。

    ![2062669-20200614010430884-1313551261](https://raw.githubusercontent.com/ChenforCode/chen-imagebed/master/img/2062669-20200614010430884-1313551261.png)

    * A最早的时候想对C发送连接，但是A不知道C的位置，于是A向中转服务器B发送一个请求，请求他帮我建立一个与C的UDP请求。
    * B收到了A的请求之后，会把B外网和内网地址作为二元组发给A，同时也会把A的二元组发送给B。
    * 二者互相知道对方的地址二元组之后，A会开始向C的二元组地址发送UDP数据包，并且会锁定到第一个从C发送过来的UDP包。C也是同样的操作，在发送给A的同时，也在锁定从A发过来的数据包。二者一旦开始互相锁定了UDP数据包，即确认了二者可以互相到达，这个时候就会停止UDP包的发送。而是开始真的P2P的数据传输。

    上边是UDP打洞的方式，然后TCP打洞的方式会更加麻烦一些，因为基于三次握手的连接建立会更加的复杂和耗时。然后我们即将要讲的Frp实现了一种叫XTCP的方式，是在传输数据的双方部署Frp客户端建立连接进行数据传输。

  ### Frp

  * 我们现在完成这样的一个需求，想让某个公网服务发送请求，让这个请求最终到达我们的内网，让我们的内网服务完成请求处理。

  * 准备云服务器A，ip是x.x.x.x，然后本地的服务运行服务器B。frp的架构分为server和client，由于A是起到一个中转服务的作用，因此他会作为server，然后B需要和A进行通信服务，因此B是作为一个client。接下来就是具体的步骤

  * 在A和B上都下载frp工具。运行如下命令

    ```
    wget https://github.com/fatedier/frp/releases/download/v0.38.0/frp_0.38.0_linux_amd64.tar.gz
    ```

  * 解压

    ```
    tar -xvf frp_0.38.0_linux_amd64.tar.gz 
    ```

  * 最终frp安装到了如下目录，这个目录可以随意

    ```
    /usr/local/frp/
    ```

  * frp的目录下有四个文件分别如下：

    ```
    frps.ini: 服务端配置文件
    frps: 服务端软件
    frpc.ini: 客户端配置文件
    frpc: 客户端软件
    ```

  * 在A上配置Server相关信息，因此我们编辑frps.ini文件，最简单的配置，就是配置一个和client的通信端口即可。还有可以配置http和https的端口，经过测试并不是很好用，还要配置域名，因此我们采用如下的配置。

    ```ini
    [common]
    bind_port = 7000   #是一个通信端口，代表着和client建立连接通信使用的端口。
    ```

  * （可选）把frp注册为服务，可以使用systemctl start frps命令进行启动，键入如下命令。

    ```bash
    vim /usr/lib/systemd/system/frp.service
    ```

  * 写入如下内容，注意里边的ExecStart和frp的安装目录保持一致即可。

    ```ini
    [Unit]
    Description=The nginx HTTP and reverse proxy server
    After=network.target remote-fs.target nss-lookup.target
    
    [Service]
    Type=simple
    ExecStart=/usr/local/frp/frps -c /usr/local/frp/frps.ini
    KillSignal=SIGQUIT
    TimeoutStopSec=5
    KillMode=process
    PrivateTmp=true
    StandardOutput=syslog
    StandardError=inherit
    
    [Install]
    WantedBy=multi-user.target
    ```

  * 接下来可以使用如下命令控制frp的运行停止和开启启动。

    ```bash
    systemctl start frp    # 启动
    systemctl stop frp     # 停止
    systemctl restart frp  # 重启
    systemctl status frp   # 查看状态
    systemctl enable frp   # 开启服务开机自启
    systemctl disable frp  # 关闭服务开机自启
    ```

  * 在B上配置Client相关信息，我们编辑frpc.ini文件，我们采用如下的配置。

    ```ini
    [common]
    server_addr = x.x.x.x    # 中转服务器A的公网ip
    server_port = 7000       # 和A的通讯地址，应该和A的配置一样
    
    [any name]               # 从这里开始就是一个映射，这里是映射的名字，随便起
    type = tcp               # 映射的类型是tcp
    local_ip = 127.0.0.1     # 映射到本地的ip地址
    local_port = 6100        # 映射到本地的端口
    remote_port = 7001       # 服务器A的转发端口
    ```

  * 同样把frpc也注册成为B的一个服务，键入如下命令

    ```bash
    vim /usr/lib/systemd/system/frp.service
    ```

  * 输入如下内容，此时安装目录不要写错，应该是frpc的位置

    ```ini
    [Unit]
    Description=The nginx HTTP and reverse proxy server
    After=network.target remote-fs.target nss-lookup.target
    
    [Service]
    Type=simple
    ExecStart=/usr/local/frp/frpc -c /usr/local/frp/frpc.ini
    KillSignal=SIGQUIT
    TimeoutStopSec=5
    KillMode=process
    PrivateTmp=true
    StandardOutput=syslog
    StandardError=inherit
    
    [Install]
    WantedBy=multi-user.target
    ```

  * 接下来在A上启动frps服务，在B上启动frpc的服务，此时就能够完成内网穿透的功能，即A服务器的请求可以转发到本地的127.0.0.1:6100了。具体就是x.x.x.x:7001  -> 127.0.0.1:6100。

  * 如果你想再多一个转发，例如想让x.x.x.x:7002 ->127.0.0.1:6200。这个时候可以在写一个配置，就完成了这样的请求

    ```ini
    [any name2]               # 从这里开始就是一个映射，这里是映射的名字，随便起
    type = tcp               # 映射的类型是tcp
    local_ip = 127.0.0.1     # 映射到本地的ip地址
    local_port = 6200        # 映射到本地的端口
    remote_port = 7002       # 服务器A的转发端口
    ```

  * 所以这个时候，如果有外部有个请求想访问到我们内网的请求，就让他访问x.x.x.x:7001。frp会把这个请求转发到我们本地的127.0.0.1:6100。这样就实现了一个内网穿透的功能。

### 结语

* 对原理理解的还不是很深，只是在业务需求上完成了自己的需求。为什么不用花生壳之类的工具呢，因为他们会给你分配一个花生壳自己的子域名，必须使用这个子域名作为公网服务来进行转发，安全性不知道如何。因此采用自己的公网服务器，用ip+端口的方式进行转发。




