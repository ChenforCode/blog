---
title: homepage第四期：微服务功能实现及相关测试
date: 2019-11-11
tags:
 - Java
 - SpringCloud
 - Homepage系列
categories:
 - Homepage
---

![](https://img.hacpai.com/bing/20180125.jpg?imageView2/1/w/960/h/540/interlace/1/q/100)

1.建立courseInfo服务接口
```
package cn.chenforcode.homepage.service;

import cn.chenforcode.homepage.CourseInfo;
import cn.chenforcode.homepage.CourseInfosRequest;

import java.util.List;

public interface ICourseService {

    /**
     * @Author <a href="http://www.chenforcode.cn">PKUCoder</a>
     * @Date 2019/11/11 7:27 下午
     * @Param [id]
     * @Return cn.chenforcode.homepage.CourseInfo
     * @Description 根据id获取一个courseInfo
     **/
    CourseInfo getCourseInfo(Long id);

    /**
     * @Author <a href="http://www.chenforcode.cn">PKUCoder</a>
     * @Date 2019/11/11 7:27 下午
     * @Param [courseInfosRequest]
     * @Return java.util.List<cn.chenforcode.homepage.CourseInfo>
     * @Description 根据一个courseInfoRequest对象得到一个courseInfo的list
     **/
    List<CourseInfo> getCourseInfos(CourseInfosRequest courseInfosRequest);
}

```

2.完成对应的实现类
```
package cn.chenforcode.homepage.service.impl;

import cn.chenforcode.homepage.CourseInfo;
import cn.chenforcode.homepage.CourseInfosRequest;
import cn.chenforcode.homepage.entity.HomepageCourse;
import cn.chenforcode.homepage.repository.HomepageCourseRepository;
import cn.chenforcode.homepage.service.ICourseService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * @author <a href="http://www.chenforcode.cn">PKUCoder</a>
 * @date 2019/11/11 7:28 下午
 * @description ICourseService接口实现类
 */
@Slf4j
@Service
public class CourseServiceImpl implements ICourseService {

    @Autowired
    private HomepageCourseRepository homepageCourseRepository;

    @Override
    public CourseInfo getCourseInfo(Long id) {
        Optional<HomepageCourse> course = homepageCourseRepository.findById(id);
        //这句话的意思是传入一个homepageCourse对象，然后构造出来一个courseInfo并返回。如果course对象是空的就用invalid
        //方法的到的一个无效对象进行代替
        return buildCourseInfo(course.orElse(HomepageCourse.invalid()));
    }

    @Override
    public List<CourseInfo> getCourseInfos(CourseInfosRequest courseInfosRequest) {
        //如果request里边的id列表是空的，那么就返回一个空的列表
        if (CollectionUtils.isEmpty(courseInfosRequest.getIds())) {
            return Collections.emptyList();
        }
        //否则就进行查询
        List<HomepageCourse> courses = homepageCourseRepository.findAllById(courseInfosRequest.getIds());
        return courses.stream()
                .map(this::buildCourseInfo)
                .collect(Collectors.toList());
    }

    /**
     * @Author <a href="http://www.chenforcode.cn">PKUCoder</a>
     * @Date 2019/11/11 7:46 下午
     * @Param [course]
     * @Return cn.chenforcode.homepage.CourseInfo
     * @Description 根据传入的一个course构造出来一个courseInfo
     **/
    private CourseInfo buildCourseInfo(HomepageCourse course) {
        return CourseInfo.builder()
                .id(course.getId())
                .courseName(course.getCourseName())
                .courseType(course.getCourseType() == 0 ? "免费课程":"收费课程")
                .courseIcon(course.getCourseIcon())
                .courseIntro(course.getCourseIntro())
                .build();
    }
}

```

3.完成controller
```
package cn.chenforcode.homepage.controller;

import cn.chenforcode.homepage.CourseInfo;
import cn.chenforcode.homepage.CourseInfosRequest;
import cn.chenforcode.homepage.service.ICourseService;
import com.alibaba.fastjson.JSON;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author <a href="http://www.chenforcode.cn">PKUCoder</a>
 * @date 2019/11/11 7:48 下午
 * @description 课程对外服务接口
 */
@Slf4j
@RestController
public class HomepageCourseController {

    @Autowired
    private ICourseService courseService;

    @GetMapping("/get/course")
    public CourseInfo getCourseInfo(Long id) {
        log.info("<homepage-course>: get course -> {}", id);
        return courseService.getCourseInfo(id);
    }

    @PostMapping("/get/courses")
    public List<CourseInfo> getCourseInfos(@RequestBody CourseInfosRequest request) {
        log.info("<homepage-course>: get courses -> {}", JSON.toJSONString(request));
        return courseService.getCourseInfos(request);
    }
}

```

4.对service进行测试，首先建立测试环境
@1在test目录下建立resources目录，并标记为test resources root，将main目录下的配置文件拷贝进来
@2 建立Application启动类
```
package cn.chenforcode.homepage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author <a href="http://www.chenforcode.cn">PKUCoder</a>
 * @date 2019/11/11 8:00 下午
 * @description 测试用例启动类
 */
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

```
@3.编写测试
```
package cn.chenforcode.homepage.service;

import cn.chenforcode.homepage.Application;
import cn.chenforcode.homepage.CourseInfosRequest;
import cn.chenforcode.homepage.entity.HomepageCourse;
import cn.chenforcode.homepage.repository.HomepageCourseRepository;
import com.alibaba.fastjson.JSON;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;

/**
 * @author <a href="http://www.chenforcode.cn">PKUCoder</a>
 * @date 2019/11/11 9:13 下午
 * @description homepageCourseService的测试类
 */
@SpringBootTest(classes = {Application.class}, webEnvironment = SpringBootTest.WebEnvironment.NONE)
@RunWith(SpringRunner.class)
public class HomepageCourseServiceTest {

    @Autowired
    private HomepageCourseRepository courseRepository;

    @Autowired
    private ICourseService courseService;

//    @Test
    public void testCreateCourseInfo() {
        HomepageCourse course1 = new HomepageCourse(
                "JDK11&12 新特性解读",
                0,
                "http://www.chenforcode.cn",
                "解读JDK11&12的新特性");

        HomepageCourse course2 = new HomepageCourse(
                "基于SpringCloud的广告系统的实现",
                1,
                "http://www.chenforcode.cn",
                "基于SpringCloud微服务架构的广告系统的实现");
        System.out.println(courseRepository.saveAll(Arrays.asList(course1, course2)).size());
    }

    @Test
    public void testGetCourseInfo() {
        System.out.println(JSON.toJSONString(
                courseService.getCourseInfo(6L)
        ));
        System.out.println(JSON.toJSONString(
                courseService.getCourseInfo(8L)
        ));
    }

    @Test
    public void testGetCourseInfos() {
        System.out.println(JSON.toJSONString(
                courseService.getCourseInfos(
                        new CourseInfosRequest(Arrays.asList(8L, 9L))
                )
        ));
    }
}

```
