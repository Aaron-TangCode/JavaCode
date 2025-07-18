import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/dev-log/": [
    "",
    {
      text: "Lottery 项目开发日志",
      icon: "laptop-code",
      children: ["day01.md","day02.md","day03.md","day04.md","day05.md","day06.md","day07~day08.md","day09~day10.md","day11.md","day12.md"],
    },
  ],

  '/interview-guide/': [
    {
      text: "面试宝典",
      icon: "laptop-code",
      collapsible: true,
      children: ["day11.md","day12.md","day13.md"],
    },
  ],
});
