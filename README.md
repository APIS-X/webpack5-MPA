## 简介
```
  Web项目包括MPA(多页应用)、SPA(单页应用)等开发模式。采用React、Vue等框架开发的项目一般是SPA开发模式，当然也存在大量的项目还是以MPA的模式存在，比如公司官网等未采用前端路由模式的一些项目。该项目以Webpack 5为构建工具，结合ejs模板、集成less等搭建项目，模块化开发，帮助开发人员构建MPA项目。
```

## 目录结构
```
├─ build                          Webpack编译文件配置目录   
    ├─ entry.js                   入口配置
    ├─ plugins.js                 插件配置
    ├─ rules.js                   loader等配置
    ├─ webpack.config.js          配置文件入口
├─ dist                           打包生成目录
    ├─ assets                     对应'src/assets'目录
    ├─ js                         打包生成js目录
        ├─ *.js
    ├─ css                        打包生成的css目录
        ├─ *.css
    ├─ *.html                     打包生成的多页面html
├─ src                            开发目录
    ├─ assets                     静态文件公共目录
    ├─ common                     公共js等
    ├─ components                 公共模块
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
  1.每个页面都包含