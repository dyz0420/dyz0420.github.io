var posts=["2021/07/16/IO流详解/","2021/08/11/Java反射/","2021/07/06/Java常用类/","2021/07/22/Java多线程/","2021/07/14/Java枚举类/","2021/08/16/Java网络编程/","2022/10/30/JVM/","2022/08/11/Redis常用命令/","2023/09/03/RocketMQ/","2022/01/23/Mybatis框架/","2022/02/24/Spring框架-AOP/","2021/07/31/Java集合详解/","2022/02/15/Spring框架-IOC/","2022/03/03/Spring框架-声明式事务/","2023/03/04/快速搭建SpringBoot项目/","2021/07/10/排序算法/","2023/09/03/安装mysql/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};