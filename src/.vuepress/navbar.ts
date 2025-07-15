import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/md/resume",
  {
    text: "开发日志",
    icon: "book",
    link: "/md/dev-log/day01.md",
  },
]);
