---
title: 295. 数据流的中位数
date: 2021-08-27
tags:
 - Leetcode
 - 算法
categories:
 - Leetcode
---

> 中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。
>
> 例如，
>
> 2 3 4 的中位数是 3
>
> 2 3 的中位数是 \(2 + 3\) / 2 = 2.5
>
> 设计一个支持以下两种操作的数据结构：
>
> void addNum\(int num\) - 从数据流中添加一个整数到数据结构中。
> double findMedian\(\) - 返回目前所有元素的中位数。
> 示例：
>
> addNum\(1\)
> addNum\(2\)
> findMedian\(\) -> 1.5
> addNum\(3\)
> findMedian\(\) -> 2
> 进阶:
>
> 如果数据流中所有整数都在 0 到 100 范围内，你将如何优化你的算法？
> 如果数据流中 99% 的整数都在 0 到 100 范围内，你将如何优化你的算法？

```java
class MedianFinder {
    //左边是大根堆，放小数，堆顶是最大值，降序排列
    PriorityQueue<Integer> l = new PriorityQueue<>((a,b)->b-a);
    //右边是小根堆，放大数，堆顶是最小值，升序排列
    PriorityQueue<Integer> r = new PriorityQueue<>((a,b)->a-b);

    /** initialize your data structure here. */
    public MedianFinder() {
    }

    public void addNum(int num) {
        if (l.size() == 0) {
            l.add(num);
        } else if (l.size() == r.size()) {
            if (num <= r.peek()) {
                l.add(num);
            } else {
                r.add(num);
                l.add(r.poll());
            }
        } else if (l.size() > r.size()) {
            if (num > l.peek()) {
                r.add(num);
            } else {
                l.add(num);
                r.add(l.poll());
            }
        }

    }

    public double findMedian() {
        if (l.size() == r.size()) {
            return ((double)l.peek() + r.peek()) / 2;
        } else {
            return l.peek();
        }
    }
}
```


