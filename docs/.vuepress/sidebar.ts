import { sidebar } from "vuepress-theme-hope";

export default sidebar({

  // 对应导航栏：面试指北
  '/': [
    {
      text: "项目介绍",
      icon: "laptop-code",
      collapsible: true,
      prefix: "javacode/",
      children: [
        "JavaCode项目介绍.md",
        "JavaCode使用建议.md",
      ],
    },
    {
      text: "Java",
      icon: "laptop-code",
      collapsible: true,
      prefix: "java/",
      children: [
        {
          text: "基础知识",
          icon: "laptop-code",
          collapsible: true,
          prefix: "basic/",
          children: [
            "Java基础-基础知识.md",
          ],
        },
        {
          text: "集合",
          icon: "laptop-code",
          collapsible: true,
          prefix: "collection/",
          children: [
            "Java基础-集合.md",
          ],
        },
      ],
    },
    {
      text: "MySQL",
      icon: "laptop-code",
      collapsible: true,
      prefix: "database/mysql",
      children: [
        "慢SQL治理.md",
        "虚拟列触发的Bug.md",
      ],
    },
    {
      text: "Spring",
      icon: "laptop-code",
      collapsible: true,
      children: [
        "day11.md",
        "day12.md",
        "day13.md"
      ],
    },
    {
      text: "RocketMQ",
      icon: "laptop-code",
      collapsible: true,
      children: [
        "day11.md",
        "day12.md",
        "day13.md"
      ],
    },
    {
      text: "Redis",
      icon: "laptop-code",
      collapsible: true,
      children: [
        "day11.md",
        "day12.md",
        "day13.md"
      ],
    },
    {
      text: "面经",
      icon: "laptop-code",
      collapsible: true,
      prefix: "interview-experience/",
      children: [
        "阿里巴巴五面面经.md",
        "转转_一面_面经.md",
        "京东_一面_0610.md",
        "Gitee_一面.md",
        "乐趣无限_一面.md",
        "跨越速运_一面.md"
      ],
    },
    {
      text: "大厂面试题",
      icon: "laptop-code",
      collapsible: true,
      prefix: "interview-guide/",
      children: [
        "B站历史视频汇总.md",
      ],
    },
    {
      text: "生产事故",
      icon: "laptop-code",
      collapsible: true,
      prefix: "production-accident/",
      children: [
        "哎哟！这个Bug，有点东西.md",
      ],
    },
  ],

  // 对应导航栏：走近作者
  "/about-author/": [
    {
      text: "走近作者",
      icon: "laptop-code",
      children: [

      ],
    },
  ],
  // 对应导航栏：实际工作
  "/work/": [
    {
      text: "实际工作",
      icon: "laptop-code",
      children: [
          "在进行技术方案_代码评审时，我们应该关注哪些方面？.md",
          "如何防止接口被盗刷.md",
      ],
    },
  ],
});
