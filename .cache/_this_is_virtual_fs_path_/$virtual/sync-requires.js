
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/leif/Desktop/Work/team_2/test_templates/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/leif/Desktop/Work/team_2/test_templates/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/leif/Desktop/Work/team_2/test_templates/src/pages/index.js")),
  "component---src-pages-news-js": preferDefault(require("/Users/leif/Desktop/Work/team_2/test_templates/src/pages/news.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/leif/Desktop/Work/team_2/test_templates/src/pages/page-2.js")),
  "component---src-pages-using-ssr-js": preferDefault(require("/Users/leif/Desktop/Work/team_2/test_templates/src/pages/using-ssr.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/leif/Desktop/Work/team_2/test_templates/src/pages/using-typescript.tsx")),
  "component---src-templates-using-dsg-js": preferDefault(require("/Users/leif/Desktop/Work/team_2/test_templates/src/templates/using-dsg.js"))
}

