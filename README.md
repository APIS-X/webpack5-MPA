## 简介

Web 项目包括 MPA(多页应用)、SPA(单页应用)等开发模式。采用 React、Vue 等框架开发的项目一般是 SPA 开发模式，当然也存在大量的项目还是以 MPA 的模式存在，比如公司官网等未采用前端路由模式的一些项目。该项目以 Webpack 5 为构建工具，结合 ejs 模板、集成 less 等搭建项目，模块化开发，帮助开发人员构建 MPA 项目。

## 项目特点

- 该项目暂未集成任何第三方库，比如 React,vue 等等, 已集成的 lodash、jquery、swiper 仅用于测试，实际项目中可根据需要增删;
- 已引入的 dot 模板引擎用于渲染页面引入的动态数据等，静态数据可通过 ejs 模板直接解析;
- 公共 css、js 等已做打包拆分优化;
- layouts 模板可根据实际业务需求调整，项目中只做了基本的布局，旨在给出传参等配置写法;
- 项目中 css 通过 less 语法编写，打包时会单独抽离成文件引入到对应的页面，如果要以 style 方式引入页面的话，需修改相关配置;

## 目录结构

```
├─ build                          Webpack编译文件配置目录
    ├─ settings.js                打包路径等相关配置入口
    ├─ entry.js                   入口配置
    ├─ plugins.js                 插件配置
    ├─ rules.js                   loader等配置
    ├─ webpack.config.js          配置文件入口
├─ dist                           打包生成目录
    ├─ assets                     静态文件目录,对应'src/assets'
    ├─ js                         打包生成js目录
        ├─ *.js
    ├─ css                        打包生成的css目录
        ├─ *.css
    ├─ *.html                     打包生成的多页面html
├─ src                            开发目录
    ├─ assets                     静态文件公共目录
    ├─ common                     公共js等
    ├─ components                 公共模块,多个页面公用的模板可放于此
    ├─ configs                    项目配置目录：包括logo、项目名称、路由等
    ├─ layouts                    框架模块等
    ├─ libs                       第三方库
    ├─ pages                      多页面入口
        ├─ index                  示例首页
            ├─ index.js           页面模板入口,根据静态数据等生成页面dom在此处操作
            ├─ main.js            页面入口文件,静态页面加载后相关动态数据等交互逻辑在此处操作
            ├─ style.less         页面less样式
            ├─ template.ejs       页面ejs模板
        ├─ ...                    每个页面的文件结构都和‘示例首页’一致
    ├─ styles
        ├─ global.less            页面公共样式
        ├─ layout.less            页面框架布局模板样式
        ├─ variables.less         less变量维护
    ├─ utils                      工具库
        ├─ utils.js               工具函数

```

## 运行与打包

1.运行：

```
  npm install # 初次运行之前安装依赖
  npm start
```

2.打包：

```
  npm run build
```

## 注意点

- 项目使用 webpack5 构建，官网要求 node 最低版本为 10.13.0 (LTS)。
- 项目是用 webpack5 构建, 考虑版本兼容性等,配置文件中相关 loader、plugins、以及 webpack-dev-server 的配置和版本已做同步更新调整;
- 页面模板使用 webpack5 默认的 ejs 模板，书写模板的时候在使用 ejs 语法的同时也要考虑 webpack 的兼容情况;
