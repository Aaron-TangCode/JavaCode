export const data = JSON.parse("{\"key\":\"v-3b83e8d6\",\"path\":\"/database/mysql/%E8%99%9A%E6%8B%9F%E5%88%97%E8%A7%A6%E5%8F%91%E7%9A%84Bug.html\",\"title\":\"虚拟列触发的Bug\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"虚拟列触发的Bug\",\"index\":false,\"category\":[\"生产事故\"],\"description\":\"背景：新增虚拟列导致异地机房同步延迟问题 表现：业务受影响。 因为N个数据库实例放在同一个服务器实例上，其中一个数据库实例因新增虚拟列，使得异地机房无法同步。从而导致数据库CPU从20%升到105%，数据库QPS从6K飙升到45K，还有慢查询，逻辑读，物理读，连接数全都飙升。 （新增一张主从同步的图：直角三角形） 因为N个数据库实例在同一个服务器实例上...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/database/mysql/%E8%99%9A%E6%8B%9F%E5%88%97%E8%A7%A6%E5%8F%91%E7%9A%84Bug.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"JavaCode\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"虚拟列触发的Bug\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"背景：新增虚拟列导致异地机房同步延迟问题 表现：业务受影响。 因为N个数据库实例放在同一个服务器实例上，其中一个数据库实例因新增虚拟列，使得异地机房无法同步。从而导致数据库CPU从20%升到105%，数据库QPS从6K飙升到45K，还有慢查询，逻辑读，物理读，连接数全都飙升。 （新增一张主从同步的图：直角三角形） 因为N个数据库实例在同一个服务器实例上...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"程序员大头菜\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"虚拟列触发的Bug\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"程序员大头菜\\\",\\\"url\\\":\\\"https://space.bilibili.com/317080675\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":2.44,\"words\":733},\"filePathRelative\":\"database/mysql/虚拟列触发的Bug.md\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
