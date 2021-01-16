## 简介

Web项目包括MPA(多页应用)、SPA(单页应用)等开发模式。采用React、Vue等框架开发的项目一般是SPA开发模式，当然也存在大量的项目还是以MPA的模式存在，比如公司官网等未采用前端路由模式的一些项目。该项目以Webpack 5为构建工具，结合ejs模板、集成less等搭建项目，模块化开发，帮助开发人员构建MPA项目。

## 项目特点
- 该项目暂未集成任何第三方库，比如React,vue等等, 已集成的lodash、jquery、swiper仅用于测试，实际项目中可根据需要增删;
- 已引入的dot模板引擎用于渲染页面引入的动态数据等，静态数据可通过ejs模板直接解析;
- 公共css、js等已做打包拆分优化;
- layouts模板可根据实际业务需求调整，项目中只做了基本的布局，旨在给出传参等配置写法;
- 项目中css通过less语法编写，打包时会单独抽离成文件引入到对应的页面，如果要以style方式引入页面的话，需修改相关配置;

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
- 项目使用webpack5构建，官网要求node最低版本为10.13.0 (LTS)。
- 项目是用webpack5构建, 考虑版本兼容性等,配置文件中相关loader、plugins、以及webpack-dev-server的配置和版本已做同步更新调整;
- 页面模板使用webpack5默认的ejs模板，书写模板的时候在使用ejs语法的同时也要考虑webpack的兼容情况;