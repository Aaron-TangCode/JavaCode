import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "E:/ideaProject/dtc-tech-blog/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useStyleTag } from "E:/ideaProject/dtc-tech-blog/node_modules/@vueuse/core/index.mjs";
import Badge from "E:/ideaProject/dtc-tech-blog/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "E:/ideaProject/dtc-tech-blog/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "E:/ideaProject/dtc-tech-blog/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "E:/ideaProject/dtc-tech-blog/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`\
@import url("//at.alicdn.com/t/c/font_4979631_j2gwmf5l4jn.css");
`);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
