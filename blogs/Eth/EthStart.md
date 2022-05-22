---
title: 以太坊起步
date: 2022-05-21
tags:
 - Eth
categories:
 - Eth
---

## 以太坊起步

### 一些名词(个人的理解而已)

* 区块链
    * 一种去中心化的数据库系统，数据库的组织形式是用链表，每个节点称为一个区块，区块内存放着交易信息以及前一个区块的hash值。
    * 每十分钟会产生一个区块，通过挖矿产生区块，产生区块的过程中，区块的打包人会得到比特币的奖励。
    * 挖矿就是工作量证明，去找到一个数+拼接上区块的信息求hash，使得这个hash小于一个阈值，挖矿本身似乎没有任何的意义。只是用这种工作量的标准来确定谁产生的下一个区块会被拼接到链上。
* 比特币
    * 基于区块链的一种加密货币。
* 以太坊
    * 是区块链的一个升级版本，区块产生更快，将现实中的合约概念引入，即智能合约。
* 智能合约
    * 运行在以太坊上的一段代码，一旦代码上链之后，将不能修改。智能合约本身也是一个账户，支持账户账户转账和账户合约转账。
* Geth
    * 命令行工具，可以在本地搭建出一个以太坊的私链
* ganache
    * 命令行+客户端工具，可以在本地搭建出一个以太坊的私链
* truffle
    * 一个使用web3js开发dapp的一个框架，支持合约的编译，部署，dapp前端开发的工作
* web3js
    * 一个可以和以太坊进行交互的js库，提供一些js的api与以太坊进行交互
* web3j
    * 一个可以和以太坊进行交互的java库，提供一些java的api与以太坊进行交互

### 用Remix编写智能合约

* 编写合约，注意这里的合约为什么没有用string来作为人员名单？因为自己试了试如果用string的话会出现各种问题，例如没有加memory字段，以及两个字符串不能直接用等号来判断是否相等，等问题，因此和其他教程里一样，先使用bytes32

  ```
  pragma solidity >=0.4.22 <0.6.0;
  
  // 定义一个投票合约
  contract Voting {
      // 定义候选人名单
      bytes32[] public candidateList;
      // 票数的映射，候选人名称->票数的映射
      mapping(bytes32 => uint8) public votesReceived;
      // 合约构造函数，在部署的时候需要给出参数，初始化候选人名单
      constructor(bytes32[] memory candidateListName) public  {
          candidateList = candidateListName;
      }
      // 校验投票的对象是否在候选人名单里
      function validateCanditate(bytes32 candidateName)internal view returns(bool) {
          for (uint8 i =0; i < candidateList.length; i++) {
              if (candidateName == candidateList[i])
                  return true;
          }
          return false;
      
      }
      // 为某个候选人投票
      function voteForCandidate(bytes32 candidateName) public {
          require(validateCanditate(candidateName));
          votesReceived[candidateName] += 1;
      }
      // 获取某个候选人的票数
      function totalVotesFor(bytes32 candidateName) view public returns(uint8) {
          require(validateCanditate(candidateName));
          return votesReceived[candidateName];
      }
  }
  ```

* 编译合约，点击如下按钮即可完成编译

  ![image-20220521154341892](https://raw.githubusercontent.com/ChenforCode/chen-imagebed/master/img/image-20220521154341892.png)

* 部署合约

  如下如内容进行合约部署，然后再deploy这里，它能自动的识别出来你的构造函数入参是，candidatelistname，因此需要在框里输入候选人名单，是一个数组。然后为了简单，我们使用A B两个人进行投票，AB字母对应的bytes32为，即传入如下数组即可。

  ```
  ["0x4100000000000000000000000000000000000000000000000000000000000000",
      "0x4200000000000000000000000000000000000000000000000000000000000000"]
  ```

  ![image-20220521154707031](https://raw.githubusercontent.com/ChenforCode/chen-imagebed/master/img/image-20220521154707031.png)

* 合约调用

  部署完合约之后，remix还可以给出合约调用的接口，即给出voteForCandidate，totalVotesFor两个函数的调用接口。我们调用voteForCandidate，然后传入0x42为B投一票，然后调用totalVotesFor获取B的票数，我们可以看出已经得到了结果1。

  ![image-20220521155044275](https://raw.githubusercontent.com/ChenforCode/chen-imagebed/master/img/image-20220521155044275.png)

#### 使用ganache搭建一个私链

* ganache有命令行也有客户端，客户端的话搭建就比较简单，直接进去就行，主界面就是自动为我们搭建好的私链，默认有10个账户，账户里有一定的余额。

  ![image-20220521160949965](https://raw.githubusercontent.com/ChenforCode/chen-imagebed/master/img/image-20220521160949965.png)

* 区块情况，目前没有区块

  ![image-20220521161036890](https://raw.githubusercontent.com/ChenforCode/chen-imagebed/master/img/image-20220521161036890.png)

* 链的信息，这里可以看到链的地址是127.0.0.1，端口是7545

  ![image-20220521161129270](https://raw.githubusercontent.com/ChenforCode/chen-imagebed/master/img/image-20220521161129270.png)

### 使用web3j进行合约交互

* 使用web3j进行交互主要分为几个步骤：1、先再remix上把合约调好，假如写了一个vote.sol。2、利用web3j-maven-plugin插件将vote.sol转换成voting.java。这个java文件相当于是提供了java api，然后你可以在你自己的代码逻辑里调用生成的voting.java中的api。主要的api就是合约里的那几个函数。具体如下。

* 在pom里配置插件，目前测试出来的几个比较重要的配置。第一个是outputDirectory，第二个是packageName，这两个配置合到一起就是最终这个合约生成java文件的地址。以如下代码为例，生成的路径就是src/main/java/cn.chenforcode.contract。如下图

  ![image-20220521182055715](https://raw.githubusercontent.com/ChenforCode/chen-imagebed/master/img/image-20220521182055715.png)

  然后soliditySourceFiles是存放sol文件的位置，例如如下配置就是放在resources目录下，它可以找到该目录下的所有以.sol结尾的文件。

  ```xml
  <plugin>
      <groupId>org.web3j</groupId>
      <artifactId>web3j-maven-plugin</artifactId>
      <version>4.8.2</version>
      <configuration>
          <packageName>cn.chenforcode.contract</packageName>
          <sourceDestination>src/main/java/generated</sourceDestination>
          <nativeJavaType>true</nativeJavaType>
          <outputFormat>java</outputFormat>
          <soliditySourceFiles>
              <directory>src/main/resources</directory>
              <includes>
                  <include>**/*.sol</include>
              </includes>
          </soliditySourceFiles>
          <abiSourceFiles>
              <directory>src/main/resources</directory>
              <includes>
                  <include>**/*.json</include>
              </includes>
          </abiSourceFiles>
          <outputDirectory>
              <java>src/main/java</java>
          </outputDirectory>
          <contract>
              <includes>
                  <include>greeter</include>
              </includes>
              <excludes>
                  <exclude>mortal</exclude>
              </excludes>
          </contract>
          <pathPrefixes>
              <pathPrefix>dep=../dependencies</pathPrefix>
          </pathPrefixes>
      </configuration>
  </plugin>
  ```

* 将solidity合约用插件包装成为java api，分为如下几步

    * 准备一个投票合约，即用上述的投票合约放到resources目录下

      ![image-20220522182043319](https://raw.githubusercontent.com/ChenforCode/chen-imagebed/master/img/image-20220522182043319.png)

    * 使用插件

      ![image-20220522190545702](https://raw.githubusercontent.com/ChenforCode/chen-imagebed/master/img/image-20220522190545702.png)

    * 得到包装好的Voting类，名字会和合约里边的名字保持一致，

      ![image-20220522190651499](https://raw.githubusercontent.com/ChenforCode/chen-imagebed/master/img/image-20220522190651499.png)

* 合约交互

  合约交互我们直接看接下来的代码，是一个投票系统。主要的流程就是要先部署一个合约，部署方法会返回一个contract对象供我们调用。然后是调用合约，也可以先load一个合约，再调用。调用的流程就是用生成的类里边的方法进行调用。

  ```java
  public class MainService {
      public static void main(String[] args) throws Exception {
          //两个候选人
          String[] strings = new String[]{"A", "B"};
          //把两个候选人转成byte32的数组，也就是长度为32的byte数组
          List<byte[]> collect = Arrays.stream(strings).map(e -> {
              byte[] bytes = stringToBytes32(e);
              return bytes;
          }).collect(Collectors.toList());
          //创建一个web3对象，需要传入链的地址和端口
          Web3j web3 = Web3j.build(new HttpService("http://127.0.0.1:7545"));
          //创建一个认证对象，我们采用私钥认证，即传入一个私钥即可
          Credentials credentials = Credentials.create("私钥");
          //部署合约。需要传入的参数有web3对象，认证对象，默认的gas对象，构造函数参数
  //        Voting contract = Voting.deploy(web3, credentials, new DefaultGasProvider(), collect).send();
          //部署之后，以后再次使用可以使用load合约，传入的参数有合约地址，web3对象，认证对象，默认的gas对象
          Voting load = Voting.load("0xea25c1eb60a7aa7cde279d751a5f22617767e0b0", web3, credentials, new DefaultGasProvider());
          //调用投票方法，给A投票，记得A也要转成byte32
          load.voteForCandidate(stringToBytes32("A")).send();
          //调用获取票数方法，获取A的票数，A需要转成byte32
          BigInteger a = load.totalVotesFor(stringToBytes32("A")).send();
          System.out.println(a);
      }
  
      //将一个string，转成长度为32的byte数组
      public static byte[] stringToBytes32(String string) {
          byte[] byteValue = string.getBytes();
          byte[] byteValueLen32 = new byte[32];
          System.arraycopy(byteValue, 0, byteValueLen32, 0, byteValue.length);
          return byteValueLen32;
      }
  }
  ```

* 直接看上边的注释即可，一般分为如下基本步骤

    * 创建web3对象，一般需要指定链的url和port
    * 创建认证对象，一般是指定私钥
    * 部署一个合约，需要传入的参数有web3对象，认证对象，gas参数（即交易的费用，一般用默认的即可），合约的构造函数参数。
    * 加载一个合约，需要传入的参数有合约地址，web3对象，认证对象，gas参数
    * 调用合约，调用合约就用部署或者加载的对象，直接调用合约里对应的方法即可。

* 交互结果，可以看到我们给A投票，经过调用，目前A已经有了3票了

  ![image-20220522191045209](https://raw.githubusercontent.com/ChenforCode/chen-imagebed/master/img/image-20220522191045209.png)

* 区块信息，可以看出此时的以太坊中已经产生了区块

  ![image-20220522191234475](https://raw.githubusercontent.com/ChenforCode/chen-imagebed/master/img/image-20220522191234475.png)

* 交易信息，也有了交易的信息

  ![image-20220522191246346](https://raw.githubusercontent.com/ChenforCode/chen-imagebed/master/img/image-20220522191246346.png)

### 总结

* 需要用ganache或者geth等工具先在本地搭建出来以太坊的环境
* 使用web3j或者web3js等库对以太坊进行交互
* 交互的内容一般是以太坊上的智能合约
* 一般先去remix把合约写好，然后调试通过后，用插件将合约包装成为java类，然后再使用web3j调用进行合约交互