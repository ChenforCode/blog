---
title: homepage第五期：搭建user微服务
date: 2019-11-12
tags:
 - Java
 - SpringCloud
 - Homepage系列
 - Project
categories:
 - Project
---

![](https://img.hacpai.com/bing/20190104.jpg?imageView2/1/w/960/h/540/interlace/1/q/100)

1.新建用户微服务模块，pom文件和course基本差不多，但是由于user微服务要调用course微服务，所以需要加入feign依赖（可以以声明的方式调用微服务），和hystrix依赖（服务容错），即如下依赖
```
<!--  引入Feign，可以以声明的方式调用微服务  -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-openfeign</artifactId>
        </dependency>
        <!--  引入服务容错hystrix的依赖  -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
        </dependency>
```

2.建立user微服务启动类，注意这里多了一些注解@EnableFeignClients和@EnableCircuitBreaker分别表示开始feign和hystrix
```
package cn.chenforcode.homepage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

/**
 * @author <a href="http://www.chenforcode.cn">PKUCoder</a>
 * @date 2019/11/12 2:27 下午
 * @description user微服务模块启动类
 */
@EnableJpaAuditing
@EnableFeignClients
@EnableCircuitBreaker
@EnableEurekaClient
@SpringBootApplication
public class HomepageUserApplication {
    public static void main(String[] args) {
        SpringApplication.run(HomepageUserApplication.class, args);
    }
}

```

3.书写相关配置，这里的配置文件和course的配置也基本上是相同的，但是要加上feign和hystrix的相关配置
```
server:
  port: 7000
  servlet:
    context-path: /homepage-user
spring:
  main:
    allow-bean-definition-overriding: true
  application:
    name: eureka-client-homepage-user
  jpa:
    show-sql: true
    hibernate:
      ddl-auto: none
    properties:
      hibernate.format_sql: true
    open-in-view: false
  datasource:
    url: jdbc:mysql://127.0.0.1:3306/imooc_homepage_sc?autoReconnect=true&useUnicode=true&characterEncoding=utf8&useSSL=false
    username: root
    password: 0int*me=NULL
    driver-class-name: com.mysql.cj.jdbc.Driver
    tomcat:
      max-active: 4
      min-idle: 2
      initial-size: 2
eureka:
  client:
    service-url:
      #如果是一个集群，那么把所有的eureka的地址都写到这里
      defaultZone: http://server1:8000/eureka/
feign:
  hystrix:
    enabled: true
```

4.实现homepageUser类定义
```
package cn.chenforcode.homepage.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import javax.persistence.*;
import java.util.Date;

/**
 * @author <a href="http://www.chenforcode.cn">PKUCoder</a>
 * @date 2019/11/12 2:43 下午
 * @description homepage_user表的实体类定义
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Table(name = "homepage_user")
public class HomepageUser {
    //数据表主键
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    //用户名
    @Basic
    @Column(name = "username", nullable = false)
    private String username;

    @Basic
    @Column(name = "email", nullable = false)
    private String email;

    //创建时间
    @Basic
    @CreatedDate
    @Column(name = "create_time", nullable = false)
    private Date createTime;

    //更新时间
    @Basic
    @LastModifiedDate
    @Column(name = "update_time", nullable = false)
    private Date updateTime;

    public HomepageUser(String username, String email) {
        this.username = username;
        this.email = email;
    }
}

```

5.实现homepageUserCourse类定义
```
package cn.chenforcode.homepage.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

/**
 * @author <a href="http://www.chenforcode.cn">PKUCoder</a>
 * @date 2019/11/12 2:50 下午
 * @description homepage_user_course表的实体类定义
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Table(name = "homepage_user_course")
public class HomepageUserCourse {
    //数据表主键
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    //用户id
    @Basic
    @Column(name = "user_is", nullable = false)
    private Long userId;

    //课程id
    @Basic
    @Column(name = "course_id", nullable = false)
    private Long courseId;

    //创建时间
    @Basic
    @CreatedDate
    @Column(name = "create_time", nullable = false)
    private Date createTime;

    //更新时间
    @Basic
    @LastModifiedDate
    @Column(name = "update_time", nullable = false)
    private Date updateTime;
}

```

6.实现homepageUserRepository
```
package cn.chenforcode.homepage.repository;

import cn.chenforcode.homepage.entity.HomepageUser;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author <a href="http://www.chenforcode.cn">PKUCoder</a>
 * @date 2019/11/12 3:04 下午
 * @description HomepageUser的数据库接口
 */
public interface HomepageUserRepository extends JpaRepository<HomepageUser, Long> {
    /**
     * @Author <a href="http://www.chenforcode.cn">PKUCoder</a>
     * @Date 2019/11/12 3:10 下午
     * @Param [username]
     * @Return cn.chenforcode.homepage.entity.HomepageUser
     * @Description 通过用户名查找数据记录
     **/
    HomepageUser findByUsername(String username);
}


```

8.实现homepageUserCourseRepository
```
package cn.chenforcode.homepage.repository;

import cn.chenforcode.homepage.entity.HomepageUserCourse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @author <a href="http://www.chenforcode.cn">PKUCoder</a>
 * @date 2019/11/12 3:10 下午
 * @description HomepageUserCourseCourseRepository数据访问接口
 */
public interface HomepageUserCourseRepository extends JpaRepository<HomepageUserCourse, Long> {
    /**
     * @Author <a href="http://www.chenforcode.cn">PKUCoder</a>
     * @Date 2019/11/12 3:14 下午
     * @Param [userid]
     * @Return java.util.List<cn.chenforcode.homepage.entity.HomepageUserCourse>
     * @Description 根据用户id查询所有的用户课程信息
     **/
    List<HomepageUserCourse> findAllByUserId(Long userid);
}

```

9.开始定义feign的接口，即用户服务是需要调用课程服务的。调用其他服务的代码一般写在client包下。所以建立client包，接下来建立CourseClient
```
package cn.chenforcode.homepage.client;

import cn.chenforcode.homepage.CourseInfo;
import cn.chenforcode.homepage.CourseInfosRequest;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 * @author <a href="http://www.chenforcode.cn">PKUCoder</a>
 * @date 2019/11/12 5:03 下午
 * @description 通过Feign访问课程微服务
 */
@FeignClient(value = "eureka-client-homepage-course")
public interface CourseClient {
    @RequestMapping(value = "/homepage-course/get/course", method = RequestMethod.GET)
    CourseInfo getCourseInfo(Long id);

    @RequestMapping(value = "/homepage-course/get/courses", method = RequestMethod.POST)
    List<CourseInfo> getCourseInfos(CourseInfosRequest request);
}

```

10.由于在feign调用过程中可能会出现错误，那么就需要用hystrix熔断降级策略，接下来定义CourseClientHystrix，这个就是让这个类实现client接口，然后重新实现feign的方法，只不过返回的东西变成了在调用出错的时候你想返回的东西，在这里就返回的是一个courseInfo的invalid和一个空列表
```
package cn.chenforcode.homepage.client;

import cn.chenforcode.homepage.CourseInfo;
import cn.chenforcode.homepage.CourseInfosRequest;

import java.util.Collections;
import java.util.List;

/**
 * @author <a href="http://www.chenforcode.cn">PKUCoder</a>
 * @date 2019/11/12 5:12 下午
 * @description 熔断降级策略
 */
public class CourseClientHystrix implements CourseClient {
    @Override
    public CourseInfo getCourseInfo(Long id) {
        //在出错的时候返回一个无效的courseInfo即可
        return CourseInfo.invalid();
    }

    @Override
    public List<CourseInfo> getCourseInfos(CourseInfosRequest request) {
        //在出错的是否返回一个空列表即可
        return Collections.emptyList();
    }
}

```

11.有了熔断降级之后，client如何知道你加上去了熔断降级，那么就需要在客户端的@FeignClient注解里新加入一个值，如下：
```
@FeignClient(value = "eureka-client-homepage-course", fallback = CourseClientHystrix.class)
```

12.创建-创建用户请求对象，这个对象是与前端交互的，即发出这样的一个请求，代表后台要新加入一个用户。所以他要放在vo包下
```
package cn.chenforcode.homepage.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.commons.lang.StringUtils;

/**
 * @author <a href="http://www.chenforcode.cn">PKUCoder</a>
 * @date 2019/11/12 5:20 下午
 * @description 创建用户请求对象
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateUserRequest {
    private String username;
    private String email;

    /**
     * @Author <a href="http://www.chenforcode.cn">PKUCoder</a>
     * @Date 2019/11/12 5:22 下午
     * @Param []
     * @Return boolean
     * @Description 请求有效性验证
     **/
    public boolean validate() {
        return StringUtils.isNotEmpty(username) && StringUtils.isNotEmpty(email);
    }
}

```
里边还加入了基本的有效性验证，即username和email都不能为空

13.创建userCourseInfo对象
```
package cn.chenforcode.homepage.vo;

import cn.chenforcode.homepage.CourseInfo;
import cn.chenforcode.homepage.UserInfo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collections;
import java.util.List;

/**
 * @author <a href="http://www.chenforcode.cn">PKUCoder</a>
 * @date 2019/11/12 5:24 下午
 * @description 用户课程信息对象定义
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserCourseInfo {
    private UserInfo userInfo;
    private List<CourseInfo> courseInfos;

    /**
     * @Author <a href="http://www.chenforcode.cn">PKUCoder</a>
     * @Date 2019/11/12 5:26 下午
     * @Param []
     * @Return cn.chenforcode.homepage.vo.UserCourseInfo
     * @Description 返回一个无效的userCourseInfo对象
     **/
    public static UserCourseInfo invalid() {
        return new UserCourseInfo(
                UserInfo.invalid(),
                Collections.emptyList()
        );
    }
}

```

