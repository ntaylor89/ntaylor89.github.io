webpackJsonp([6],{"./src/layouts/slat.js":function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function l(e){return e.title?r.default.createElement("article",{className:"pv3"},r.default.createElement("div",{className:"flex flex-column flex-row-ns"},r.default.createElement("div",{className:"w-100 pr3-ns order-2 order-1-ns"},r.default.createElement("h1",{className:"f3 mv0 lh-title garamond"},r.default.createElement(o.default,{to:e.url},e.title)),e.subTitle&&r.default.createElement("span",{className:"garamond f6 mid-gray"},e.subTitle),r.default.createElement("p",{className:"f5 f4-l lh-copy"},e.summary)))):null}Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n=a("./node_modules/react/react.js"),r=s(n),d=a("./node_modules/gatsby-link/index.js"),o=s(d);e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/nate/Workspace/nate-site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/nate/Workspace/nate-site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/nate/Workspace/nate-site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/nate/Workspace/nate-site/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/nate/Workspace/nate-site/node_modules/babel-preset-env/lib/index.js","/Users/nate/Workspace/nate-site/node_modules/babel-preset-stage-0/lib/index.js","/Users/nate/Workspace/nate-site/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/posts.js':function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.data.allMarkdownRemark.edges;return r.default.createElement("section",null,t.map(function(e){return r.default.createElement(u.default,{title:e.node.frontmatter.title,summary:e.node.frontmatter.summary,subTitle:e.node.frontmatter.date,url:e.node.fields.slug})}))}Object.defineProperty(t,"__esModule",{value:!0}),t.pageQuery=void 0,t.default=l;var n=a("./node_modules/react/react.js"),r=s(n),d=a("./node_modules/gatsby-link/index.js"),o=(s(d),a("./src/layouts/slat.js")),u=s(o);t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=page-component---src-pages-posts-js-8e28b538cb887b966dd3.js.map