"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[1362],{4852:function(e,n,a){a.d(n,{Zo:function(){return m},kt:function(){return d}});var r=a(9231);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var u=r.createContext({}),s=function(e){var n=r.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},m=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(a),d=t,v=p["".concat(u,".").concat(d)]||p[d]||c[d]||o;return a?r.createElement(v,l(l({ref:n},m),{},{components:a})):r.createElement(v,l({ref:n},m))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4700:function(e,n,a){var r=a(9231);n.Z=function(e){var n=e.children,a=e.hidden,t=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:t},n)}},4034:function(e,n,a){a.d(n,{Z:function(){return p}});var r=a(5086),t=a(9231),o=a(6150),l=a(7914);var i=function(){var e=(0,t.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=a(3255),s=a(1506),m="tabItem_00Ht";function c(e){var n,a,r,o=e.lazy,l=e.block,c=e.defaultValue,p=e.values,d=e.groupId,v=e.className,g=t.Children.map(e.children,(function(e){if((0,t.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:g.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),b=(0,u.lx)(f,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===c?c:null!=(n=null!=c?c:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(r=g[0])?void 0:r.props.value;if(null!==h&&!f.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=i(),w=k.tabGroupChoices,N=k.setTabGroupChoices,y=(0,t.useState)(h),E=y[0],j=y[1],x=[],A=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var B=w[d];null!=B&&B!==E&&f.some((function(e){return e.value===B}))&&j(B)}var M=function(e){var n=e.currentTarget,a=x.indexOf(n),r=f[a].value;r!==E&&(A(n),j(r),null!=d&&N(d,r))},O=function(e){var n,a=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;a=x[r]||x[0];break;case"ArrowLeft":var t=x.indexOf(e.currentTarget)-1;a=x[t]||x[x.length-1]}null==(n=a)||n.focus()};return t.createElement("div",{className:"tabs-container"},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},v)},f.map((function(e){var n=e.value,a=e.label;return t.createElement("li",{role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,className:(0,s.Z)("tabs__item",m,{"tabs__item--active":E===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:O,onFocus:M,onClick:M},null!=a?a:n)}))),o?(0,t.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):t.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function p(e){var n=(0,o.Z)();return t.createElement(c,(0,r.Z)({key:String(n)},e))}},7914:function(e,n,a){var r=(0,a(9231).createContext)(void 0);n.Z=r},7592:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return p},default:function(){return v}});var r=a(5086),t=a(9126),o=(a(9231),a(4852)),l=a(4034),i=a(4700),u=["components"],s={title:"angular \u5b50\u5e94\u7528",slug:"/guide/demo/angular",order:6},m=void 0,c={unversionedId:"guide/demo/angular",id:"guide/demo/angular",isDocsHomePage:!1,title:"angular \u5b50\u5e94\u7528",description:"\u672c\u8282\u6211\u4eec\u5c06\u8be6\u7ec6\u4ecb\u7ecd angular \u6846\u67b6\u7684\u5e94\u7528\u4f5c\u4e3a\u5b50\u5e94\u7528\u7684\u63a5\u5165\u6b65\u9aa4\u3002",source:"@site/docs/guide/demo/angular.md",sourceDirName:"guide/demo",slug:"/guide/demo/angular",permalink:"/guide/demo/angular",editUrl:"https://github.com/bytedance/garfish/tree/main/website/docs/guide/demo/angular.md",tags:[],version:"current",lastUpdatedBy:"Zhou xiao",lastUpdatedAt:1651928914,formattedLastUpdatedAt:"2022/5/7",frontMatter:{title:"angular \u5b50\u5e94\u7528",slug:"/guide/demo/angular",order:6},sidebar:"guide",previous:{title:"vite \u5b50\u5e94\u7528",permalink:"/guide/demo/vite"},next:{title:"bridge",permalink:"/guide/bridge"}},p=[{value:"angular \u5b50\u5e94\u7528\u63a5\u5165\u6b65\u9aa4",id:"angular-\u5b50\u5e94\u7528\u63a5\u5165\u6b65\u9aa4",children:[{value:"1. \u63d2\u4ef6\u5b89\u88c5",id:"1-\u63d2\u4ef6\u5b89\u88c5",children:[],level:3},{value:"2. \u4fee\u6539 angular.json",id:"2-\u4fee\u6539-angularjson",children:[],level:3},{value:"3. \u6dfb\u52a0 webpack \u914d\u7f6e\u6587\u4ef6",id:"3-\u6dfb\u52a0-webpack-\u914d\u7f6e\u6587\u4ef6",children:[],level:3},{value:"4. \u66f4\u6539 package.json \u542f\u52a8\u811a\u672c",id:"4-\u66f4\u6539-packagejson-\u542f\u52a8\u811a\u672c",children:[],level:3},{value:"5. \u5165\u53e3\u6587\u4ef6\u5904\u5bfc\u51fa provider \u51fd\u6570",id:"5-\u5165\u53e3\u6587\u4ef6\u5904\u5bfc\u51fa-provider-\u51fd\u6570",children:[],level:3},{value:"6. \u6839\u7ec4\u4ef6\u8bbe\u7f6e\u8def\u7531\u7684 basename",id:"6-\u6839\u7ec4\u4ef6\u8bbe\u7f6e\u8def\u7531\u7684-basename",children:[],level:3},{value:"7. \u589e\u52a0\u5b50\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\u517c\u5bb9\u903b\u8f91",id:"7-\u589e\u52a0\u5b50\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\u517c\u5bb9\u903b\u8f91",children:[],level:3}],level:2}],d={toc:p};function v(e){var n=e.components,a=(0,t.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u8282\u6211\u4eec\u5c06\u8be6\u7ec6\u4ecb\u7ecd angular \u6846\u67b6\u7684\u5e94\u7528\u4f5c\u4e3a\u5b50\u5e94\u7528\u7684\u63a5\u5165\u6b65\u9aa4\u3002"),(0,o.kt)("h2",{id:"angular-\u5b50\u5e94\u7528\u63a5\u5165\u6b65\u9aa4"},"angular \u5b50\u5e94\u7528\u63a5\u5165\u6b65\u9aa4"),(0,o.kt)("h3",{id:"1-\u63d2\u4ef6\u5b89\u88c5"},"1. \u63d2\u4ef6\u5b89\u88c5"),(0,o.kt)(l.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# 1. \u5b89\u88c5 @angular-builders/custom-webpack:browser\nnpm install @angular-builders/custom-webpack:browser -D\n\n# 2. \u5b89\u88c5 @angular-builders/custom-webpack:dev-server\nnpm install @angular-builders/custom-webpack:dev-server -D\n"))),(0,o.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# 1. \u5b89\u88c5 @angular-builders/custom-webpack:browser\nyarn add @angular-builders/custom-webpack:browser -D\n\n# 2. \u5b89\u88c5 @angular-builders/custom-webpack:dev-server\nyarn add @angular-builders/custom-webpack:dev-server -D\n")))),(0,o.kt)("h3",{id:"2-\u4fee\u6539-angularjson"},"2. \u4fee\u6539 angular.json"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4fee\u6539 ","[packageName]"," > architect > build > builder")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// angular.json\n"builder": "@angular-builders/custom-webpack:browser",\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u4fee\u6539 ","[packageName]"," > architect > build > options")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// angular.json\n"options": {\n  "customWebpackConfig": {\n    // \u65b0\u589e webpack \u914d\u7f6e\n    "path": "./custom-webpack.config.js"\n  },\n  "index": "",\n}\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u4fee\u6539 ","[packageName]"," > architect > serve > builder")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// angular.json\n"builder": "@angular-builders/custom-webpack:dev-server",\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"\u8bf7\u6ce8\u610f\uff0c\u5728 ","[packageName]"," > architect > build > options \u7684\u914d\u7f6e\u4e2d\uff0cindex \u5c5e\u6027\u6211\u4eec\u8bbe\u7f6e\u4e3a\u7a7a\uff0c\u8fd9\u662f\u56e0\u4e3a\u5728 angular 13 \u4e2d\u7f16\u8bd1\u4ea7\u7269\u9ed8\u8ba4\u4f1a\u5e26\u4e0a esm \u6807\u8bc6\uff0c\u5373 type=module, \u5373\u4f7f\u6253\u5305\u4ea7\u7269\u662f umd \u683c\u5f0f\uff0c\u8fd9\u4f1a\u5bfc\u81f4 garfish \u52a0\u8f7d\u5b50\u5e94\u7528\u5931\u8d25\uff1b"),(0,o.kt)("li",{parentName:"ol"},"index \u7f6e\u7a7a\u540e\uff0c\u7f16\u8bd1\u4ea7\u7269\u4f1a\u53bb\u9664 es module \u6807\u8bc6\uff0c\u5b50\u5e94\u7528\u52a0\u8f7d\u6b63\u5e38\uff1b")))),(0,o.kt)("h3",{id:"3-\u6dfb\u52a0-webpack-\u914d\u7f6e\u6587\u4ef6"},"3. \u6dfb\u52a0 webpack \u914d\u7f6e\u6587\u4ef6"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u3010\u91cd\u8981\u3011\u6ce8\u610f\uff1a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"libraryTarget \u9700\u8981\u914d\u7f6e\u6210 umd \u89c4\u8303\uff1b"),(0,o.kt)("li",{parentName:"ol"},"globalObject \u9700\u8981\u8bbe\u7f6e\u4e3a 'window'\uff0c\u4ee5\u907f\u514d\u7531\u4e8e\u4e0d\u89c4\u8303\u7684\u4ee3\u7801\u683c\u5f0f\u5bfc\u81f4\u7684\u9003\u9038\u6c99\u7bb1\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u7684 webpack \u4e3a v4 \u7248\u672c\uff0c\u9700\u8981\u8bbe\u7f6e jsonpFunction \u5e76\u4fdd\u8bc1\u8be5\u503c\u552f\u4e00\uff08\u5426\u5219\u53ef\u80fd\u51fa\u73b0 webpack chunk \u4e92\u76f8\u5f71\u54cd\u7684\u53ef\u80fd\uff09\u3002\u82e5\u4e3a webpack5 \u5c06\u4f1a\u76f4\u63a5\u4f7f\u7528 package.json name \u4f5c\u4e3a\u552f\u4e00\u503c\uff0c\u8bf7\u786e\u4fdd\u5e94\u7528\u95f4\u7684 name \u5404\u4e0d\u76f8\u540c\uff1b"),(0,o.kt)("li",{parentName:"ol"},"publicPath \u8bbe\u7f6e\u4e3a\u5b50\u5e94\u7528\u8d44\u6e90\u7684\u7edd\u5bf9\u5730\u5740\uff0c\u907f\u514d\u7531\u4e8e\u5b50\u5e94\u7528\u7684\u76f8\u5bf9\u8d44\u6e90\u5bfc\u81f4\u8d44\u6e90\u53d8\u4e3a\u4e86\u4e3b\u5e94\u7528\u4e0a\u7684\u76f8\u5bf9\u8d44\u6e90\u3002\u8fd9\u662f\u56e0\u4e3a\u4e3b\u3001\u5b50\u5e94\u7528\u5904\u4e8e\u540c\u4e00\u4e2a\u6587\u6863\u6d41\u4e2d\uff0c\u76f8\u5bf9\u8def\u5f84\u662f\u76f8\u5bf9\u4e8e\u4e3b\u5e94\u7528\u800c\u8a00\u7684"),(0,o.kt)("li",{parentName:"ol"},"'Access-Control-Allow-Origin': '*' \u5141\u8bb8\u5f00\u53d1\u73af\u5883\u8de8\u57df\uff0c\u4fdd\u8bc1\u5b50\u5e94\u7528\u7684\u8d44\u6e90\u652f\u6301\u8de8\u57df\u3002\u53e6\u5916\u4e5f\u9700\u8981\u4fdd\u8bc1\u5728\u4e0a\u7ebf\u540e\u5b50\u5e94\u7528\u7684\u8d44\u6e90\u5728\u4e3b\u5e94\u7528\u7684\u73af\u5883\u4e2d\u52a0\u8f7d\u4e0d\u4f1a\u5b58\u5728\u8de8\u57df\u95ee\u9898\uff08",(0,o.kt)("strong",{parentName:"li"},"\u4e5f\u9700\u8981\u9650\u5236\u8303\u56f4\u6ce8\u610f\u5b89\u5168\u95ee\u9898"),"\uff09\uff1b")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// custom-webpack.config.js\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\n\nmodule.exports = {\n  output: {\n    filename: '[name].[contenthash].js',\n    chunkFilename: '[name].[contenthash].js',\n    libraryTarget: 'umd',\n    globalObject: 'window',\n    chunkLoadingGlobal: 'Garfish-demo-angular',\n    publicPath: 'http://localhost:8080'\n  },\n  plugins: [\n    new HtmlWebpackPlugin({\n      filename: 'index.html',\n      template: path.join(__dirname, 'src/index.html'),\n      chunksSortMode: 'manual',\n      chunks: ['styles', 'runtime', 'polyfills', 'scripts', 'vendors', 'main'],\n      scriptLoading: 'defer',\n    }),\n  ],\n  devServer: {\n    headers: {\n      'Access-Control-Allow-Origin': '*',\n    },\n  },\n};\n\n")),(0,o.kt)("h3",{id:"4-\u66f4\u6539-packagejson-\u542f\u52a8\u811a\u672c"},"4. \u66f4\u6539 package.json \u542f\u52a8\u811a\u672c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "scripts": {\n    "builder": "@angular-builders/custom-webpack:dev-server"\n  }\n')),(0,o.kt)("h3",{id:"5-\u5165\u53e3\u6587\u4ef6\u5904\u5bfc\u51fa-provider-\u51fd\u6570"},"5. \u5165\u53e3\u6587\u4ef6\u5904\u5bfc\u51fa provider \u51fd\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"  // src/main.ts\n  import { enableProdMode, NgModuleRef } from '@angular/core';\n  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\n  import { AppModule } from './app/app.module';\n  import { environment } from './environments/environment';\n\n  if (environment.production) {\n    enableProdMode();\n  }\n\n  let app: void | NgModuleRef<AppModule>;\n\n  async function render() {\n    await platformBrowserDynamic()\n      .bootstrapModule(AppModule)\n      .catch((err) => console.error(err));\n  }\n  export const provider = ({ dom, basename, props}) => {\n    return {\n      render,\n      destroy({ dom }) {\n        const root = dom\n          ? dom.querySelector('#root')\n          : document.querySelector('#root');\n      },\n    };\n  };\n")),(0,o.kt)("h3",{id:"6-\u6839\u7ec4\u4ef6\u8bbe\u7f6e\u8def\u7531\u7684-basename"},"6. \u6839\u7ec4\u4ef6\u8bbe\u7f6e\u8def\u7531\u7684 basename"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"\u4e3a\u4ec0\u4e48\u8981\u8bbe\u7f6e basename\uff1f\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"li",href:"/issues#%E5%AD%90%E5%BA%94%E7%94%A8%E6%8B%BF%E5%88%B0-basename-%E7%9A%84%E4%BD%9C%E7%94%A8"},"issue")),(0,o.kt)("li",{parentName:"ol"},"\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u4f7f\u7528\u4ece\u4e3b\u5e94\u7528\u4f20\u9012\u8fc7\u6765\u7684 basename \u4f5c\u4e3a\u5b50\u5e94\u7528\u7684 basename\uff0c\u800c\u975e\u4e3b\u3001\u5b50\u5e94\u7528\u7ea6\u5b9a\u5f0f\uff0c\u907f\u514d basename \u540e\u671f\u53d8\u66f4\u672a\u540c\u6b65\u5e26\u6765\u7684\u95ee\u9898\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u76ee\u524d\u4e3b\u5e94\u7528\u4ec5\u652f\u6301 history \u6a21\u5f0f\u7684\u5b50\u5e94\u7528\u8def\u7531\uff0c",(0,o.kt)("a",{parentName:"li",href:"/issues#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%BB%E5%BA%94%E7%94%A8%E4%BB%85%E6%94%AF%E6%8C%81-history-%E6%A8%A1%E5%BC%8F"},"why"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// app.module.ts\nimport { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { RouterModule } from '@angular/router';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { AppComponent } from './app.component';\nimport { TopBarComponent } from './topBar/topBar.component';\nimport { HomeComponent } from './home/home.component';\nimport { APP_BASE_HREF } from '@angular/common';\n\n@NgModule({\n  imports: [\n    BrowserModule,\n    ReactiveFormsModule,\n    RouterModule.forRoot([\n      { path: '/home', component: HomeComponent }\n    ])\n  ],\n  providers: [{ provide: APP_BASE_HREF, useValue: '/examples/angular' }],\n  declarations: [\n    AppComponent,\n    TopBarComponent,\n  ],\n  bootstrap: [AppComponent],\n})\nexport class AppModule {}\n")),(0,o.kt)("h3",{id:"7-\u589e\u52a0\u5b50\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\u517c\u5bb9\u903b\u8f91"},"7. \u589e\u52a0\u5b50\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\u517c\u5bb9\u903b\u8f91"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"last but not least, \u522b\u5fd8\u4e86\u6dfb\u52a0\u5b50\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\u903b\u8f91\uff0c\u8fd9\u80fd\u591f\u8ba9\u4f60\u7684\u5b50\u5e94\u7528\u8131\u79bb\u4e3b\u5e94\u7528\u72ec\u7acb\u8fd0\u884c\uff0c\u4fbf\u4e8e\u540e\u7eed\u5f00\u53d1\u548c\u90e8\u7f72\u3002"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// src/main.ts\nimport { enableProdMode, NgModuleRef } from '@angular/core';\nimport { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\nimport { AppModule } from './app/app.module';\n\nasync function render() {\n  await platformBrowserDynamic()\n    .bootstrapModule(AppModule)\n    .catch((err) => console.error(err));\n}\n\nif (!(window as any).__GARFISH__) {\n  render();\n}\n")))}v.isMDXComponent=!0}}]);