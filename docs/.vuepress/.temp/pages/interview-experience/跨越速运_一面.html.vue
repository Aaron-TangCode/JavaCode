<template><div><ol>
<li>讲一下最近的项目的系统架构
<ol>
<li>答：微服务架构，分三层：网关-应用服务-底层db&amp;中间件，还有我所负责的微服务负责了什么，还有其他的什么微服务</li>
</ol>
</li>
<li>如果一个微服务启动系统有问题，超时了，怎么保证其他系统不受影响？
<ol>
<li>答：MQ调用不影响，一般都做幂等。RPC调用的话调用方应该根据业务情况重试</li>
</ol>
</li>
<li>被调用方有什么办法去保护自己的服务？
<ol>
<li>答：微服务注册中心，通过健康检查机制下线不可用机器</li>
</ol>
</li>
<li>被调用方做限流的话，你会怎么处理？
<ol>
<li>答：用Sentinel配置对应API限流</li>
</ol>
</li>
<li>你在这个项目里有没有做一些，比较突出的，解决一个什么技术难点或者什么技术问题？有没有提供一些基础组件给别人用？
<ol>
<li>（才意识到，这个问题考察的是我的技术深度、技术水平）</li>
<li>答：MQ消息堆积的问题，是个同步状态的topic，上游处理不当导致发送量过大，当时用的方案是先吞掉积存消息再全量推送</li>
<li>追问：如果消息不能丢失怎么处理？</li>
<li>答：提高消费进程数，然后大脑宕机了（应该从消费者的角度，再想办法提高消费速率，消息去重、找到消费卡点等）</li>
</ol>
</li>
<li>MQ消费者，有关注分区数量吗？</li>
<li>RocketMQ如何保证消费顺序的？（一开始问我kafka有没有用过，我说没用过）
<ol>
<li>答：写入的时候按分区顺序写入，读的时候按分区顺序读，保证分区有序</li>
</ol>
</li>
<li>Redis里面还用了啥？
<ol>
<li>答：用做分布式锁，基于setnx去锁</li>
<li>追问：这个命令去做的话有什么缺点吗？</li>
<li>答：没实现好的话，可能会跨线程把别人的锁删掉</li>
<li>问：设置的超时时长一般是多长？</li>
<li>答：业务流程秒级以内，但是一般设置30s</li>
</ol>
</li>
<li>redis的Keys命令知道是干嘛的吗？它有什么缺点
<ol>
<li>答：把匹配模板的key全部列出来，会导致扫描Redis底层哈希表时长时间阻塞。缺点就是长时间阻塞，改善方法是用scan命令基于游标机制扫描</li>
</ol>
</li>
<li>redis里缓存穿透、雪崩是什么概念？</li>
<li>Mysql有哪些性能优化的经验？
<ol>
<li>答：设置合适索引</li>
<li>追问：索引是最基本的，还有其他的吗？</li>
<li>答：解决深分页问题、考虑分库分表</li>
</ol>
</li>
<li>有做过分库分表吗？
<ol>
<li>答：做过分表，代码里面自己实现的</li>
<li>追问：如果不根据分片键去查的话，要怎么处理？</li>
<li>答：一般导入es做复杂查询</li>
<li>追问：怎么同步到es</li>
<li>答：基于mysql主从同步机制，binlog同步</li>
<li>问：谁去做这个事情？</li>
<li>答：数据库DBA会有一个……</li>
<li>打断：数据库本身没这个功能</li>
<li>答：单独起一个公共服务订阅binlog，再通过MQ消息处理</li>
</ol>
</li>
<li>分库分表用的哪个框架
<ol>
<li>自己实现的……基于AOP+ThreadLocal做的。面试官奇怪地感叹：ThreadLocal??</li>
<li>没答好</li>
</ol>
</li>
<li>线上应用CPU较高如何排查？</li>
<li>技术方案设计包含哪些内容？
<ol>
<li>答：</li>
<li>问：如果是下单功能呢，会写什么？</li>
<li>问：如果调失败如何处理事务？
<ol>
<li>回滚</li>
</ol>
</li>
<li>问：如何保障回滚成功？
<ol>
<li>重试+告警，保障绝大多数情况下是可以的。单量特别大的话基于MQ重试</li>
</ol>
</li>
</ol>
</li>
<li>topic分区大小如何确定？
<ol>
<li>根据消费者</li>
<li>根据生产者</li>
</ol>
</li>
<li>你本人的优点和缺点？</li>
</ol>
</div></template>


