---
title: 慢SQL治理
index: false
category:
  - 高性能
---

# 慢SQL治理



## 1、什么是慢SQL？

- 就是执行时间较长的SQL。那具体是多长？比如超过100ms的SQL就被称为慢SQL。但这个阈值，需要根据不同的业务来进行设置。


## 2、慢SQL为什么慢？

- 查询语句的写法不合理：SQL查询语句的写法可能存在问题，比如。你使用了复杂的子查询、嵌套查询或者多个连接操作，导致查询的效率低下。**强烈建议采用：简单查询**
- 数据库表设计不合理：数据库表的设计可能存在问题，例如表关联过多、字段冗余、数据重复等，导致查询数据时需要进行大量的计算和操作，影响查询速度。**这个其实我们很难发现，因为我们一般都以为自己建的表合理**
- **缺乏合适的索引或走错索引**：索引的作用是加速数据的查找和排序，如果查询涉及的字段没有创建索引或者索引不合理，会导致查询速度变慢。**绝大部分SQL慢的原因就是索引问题**
- 数据库服务器配置不合理：数据库服务器的配置参数可能没有经过合理的调整，导致数据库性能下降，影响SQL查询的执行速度。比如：**连接数，线程数，缓冲区**参数等
- 数据库统计信息不准确：数据库的统计信息用于优化查询计划，如果统计信息没有及时更新或者不准确，可能导致查询计划选择不合理，从而影响查询速度。
- 数据量过大：当数据库中的数据量过大时，查询操作的成本会增加，导致查询速度变慢。
- 锁竞争：当多个查询同时访问同一个数据对象时，可能会发生锁竞争，导致查询等待其他操作的释放，从而影响查询速度。

## 3、慢SQL有什么影响？

- 响应时间延长：慢SQL会导致查询的响应时间延长，使用户在等待查询结果时需要更长的时间。这会**降低用户体验**，尤其是在高并发或需要实时响应的场景下。
- 服务器负载增加：慢SQL的执行时间较长，会占用服务器的资源，例如**CPU、内存和磁盘IO**等。如果大量慢SQL同时执行，会导致服务器的负载增加，降低系统的性能和并发处理能力。
- 数据库性能下降：慢SQL会导致数据库性能下降，包括**查询速度变慢、响应时间延长、并发处理能力降低**等。这会影响到整个系统的性能和稳定性。
- 系统可用性降低：当慢SQL集中发生时，可能会导致数据库服务器资源耗尽，从而导致系统崩溃或无法提供正常的服务。这会对系统的可用性产生严重影响。
- 用户流失和损失：对于在线服务或电商平台等业务，慢SQL可能会导致**用户流失和损失**。如果用户在等待查询结果的过程中感到不耐烦或无法得到满意的响应，可能会选择离开或转向竞争对手。

## 4、如何治理慢SQL？

- 发现->分析->修复方案->验证
  - 发现，分为主动发现和被动发现。
    - 主动发现：就是自己每天去数据库看日志，或者每天看SQL的监控平台。(数字化)
    - 被动发现：一旦发现慢SQL，系统会主动通知开发人员。这里的通知包括：邮件，电话，短信等。(自动化)
  - 分析&修复方案，是SQL原因，索引，数据库，数据量，硬件等
    - 优化查询语句：对于慢SQL，可以通过优化查询语句的写法来提升查询性能。例如，避免使用复杂的子查询或嵌套查询，尽量简化查询逻辑等。
      - 业务原因，其实就是结合业务来分析where 条件查询。看看是什么场景用的SQL。
        - 比如：有一些所谓根据名字进行模糊查询。like %name%。这种，快不了。只能MYSQL换ES
    - **创建合适的索引**：合理创建索引可以加速查询速度。通过分析查询的条件和频率，确定需要创建的索引类型和字段，提高数据库的查询效率。
    - 调整数据库配置参数：根据具体情况，可以调整数据库服务器的配置参数，如**内存缓冲区大小、并发连接数、查询缓存**等，以提升数据库的性能和响应速度。
    - 更新统计信息：数据库的统计信息对于优化查询计划很重要。定期更新统计信息，确保其准确性，让数据库能够选择最优的查询执行计划。
      - **常用命令：**
        - ANALYZE TABLE
        - OPTIMIZE TABLE table_name;
        - ALTER TABLE table_name ENGINE=InnoDB;
    - 重构数据库表结构：如果数据库表设计存在问题，例如表关联过多、字段冗余等，可以考虑进行数据库表结构的重构，以提高查询性能。
    - 使用缓存技术：对于一些频繁查询但数据变化不频繁的数据，可以考虑使用缓存技术，将查询结果缓存起来，避免重复查询数据库。
    - 分析和监控工具：使用性能分析和监控工具，对慢SQL进行定位和分析，了解慢SQL的具体原因和执行情况，从而有针对性地进行优化。
    - 增加硬件资源：如果以上方法无法满足需求，可以考虑增加硬件资源，如升级服务器、增加内存、使用**SSD**等，提高数据库的处理能力。
  - 验证
    - 性能测试：可以使用性能测试工具或者编写测试代码，模拟实际场景下的并发请求，测试修复后的SQL查询语句的执行时间和系统的响应性能。通过性能测试的结果，可以判断慢SQL是否得到了有效的修复。
    - 监控和分析工具：使用数据库监控工具或性能分析工具，监测和分析数据库的性能指标，例如查询响应时间、查询执行计划、索引使用情况等。通过比较修复前后的性能指标，可以判断慢SQL是否得到了改善。
    - 日志记录和观察：在修复慢SQL的过程中，可以在日志中记录修复前后的查询执行时间和相关信息。通过观察日志的变化，可以了解修复慢SQL的效果。
    - 反馈和回馈：如果修复慢SQL的工作是由团队或合作伙伴完成的，可以及时向他们反馈修复后的查询执行情况，并邀请他们进行验证和反馈。通过他们的反馈，可以了解慢SQL是否被有效修复。