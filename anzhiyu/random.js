var posts=["2023/03/10/Cookie-Session/","2023/11/08/Docker部署Superset/","2023/10/31/Docker安装MySQL并使用Navicat连接/","2023/04/26/ESport-Earnings文件在Hive的简单查询/","2023/07/31/Hexo版本升级指南/","2023/09/24/Flex的简单应用/","2023/05/20/Markdown使用手册/","2023/03/12/MVC及三层架构/","2023/10/10/MongoDB的下载及安装/","2024/02/05/QQ怎么会有这么好用的插件/","2023/10/30/PC小米妙享安装-解锁流转补丁/","2023/09/13/Spark的安装与配置/","2023/04/28/Students表在Hive的多表查询/","2023/03/14/a-j/","2022/10/17/hello-world/","2022/10/18/c语言上级复习/","2023/11/05/datax-web在windows上环境搭建及同步数据测试/","2023/06/18/hexo-Butterfly主题更换字体/","2023/06/18/hexo-inco图标的引入/","2023/03/11/jsp技术/","2023/10/31/kteele的安装和部署/","2023/07/01/post/","2023/03/09/request和response/","2023/04/25/student文件在hive中的简单查询/","2023/09/09/“pycharm的tensorflow环境配置/","2023/12/28/一个期末课程群项目的记录/","2022/10/28/今天过生日/","2022/11/15/优化防疫措施之后的家中必备药物推荐/","2022/10/19/关于叶一片/","2023/07/08/反思自己的第一次面试/","2023/09/12/可视化的类型与模型/","2024/02/04/周报1/","2024/02/11/周报2/","2023/07/26/基于ECharts数据可视化项目/","2023/04/24/在Hive中实现WordCount算法/","2023/07/12/和我旅游到底是谁的荣幸/","2023/06/12/基于Hadoop豆瓣数据分析/","2022/10/23/大一复盘/","2023/08/30/大二复盘/","2023/06/19/大数据平台核心技术/","2022/11/26/弱点/","2022/12/30/我与旧事归于尽，来年依旧迎花开/","2024/01/11/我的2023年度总结/","2023/08/29/我的个人角色正式出炉！/","2023/04/21/我看了一场来之不易的演出/","2023/08/25/摄影日记/","2023/08/24/日本正式开排核污水，到底多可怕？/","2022/11/12/正常生活/","2023/03/07/服务器与http协议/","2024/01/31/江浙沪探险记/","2022/10/23/滑啊滑/","2022/10/20/看见人的故事-1/","2023/03/08/认识servlet/","2023/09/11/认识Spark/","2022/11/05/路过鸿恩寺/","2023/03/13/过滤器及监听器/","2024/01/20/门户前端设计还原/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };