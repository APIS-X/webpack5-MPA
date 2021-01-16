const TerserPlugin = require('terser-webpack-plugin');

const settings = require('./settings');
const entry = require('./entry');
const rules = require('./rules');
const plugins = require('./plugins');

const config = {
  entry,
  output: {
    path: settings.pathDist, // 所有静态文件打包后的公共目录
    filename: settings.filename_js
  },
  module: {
    rules
  },
  resolve: {
    alias: settings.resolveAlias,
    extensions: ['.js', '.ejs', '.less']
  },
  plugins,
  devServer: {  // webpack-dev-server 配置
    historyApiFallback: true,
    contentBase: settings.pathContentBase,
    compress: true,
    open: true,
    inline: true, // 可以监控js变化
    overlay: {  // 编译器错误或者警告是否在浏览器中显示全屏覆盖
      warnings: false,
      errors: true
    },
    watchContentBase: true,  // 监听contentBase目录下的所有文件变动
    stats: 'errors-only',  // 控制台输出信息
  },
  optimization: {
    splitChunks: {
      /**
      * initial 入口 chunk，对于异步导入的文件不处理
      * async 异步 chunk，只对异步导入的文件处理
      * all 全部 chunk
      */
      chunks: 'all',
      cacheGroups: {
        // 第三方模块
        vendor: {
          name: 'vendor', // chunk 名称
          priority: 1, // 权限更高，优先抽离，重要！！！
          test: /node_modules/, // 一般第三方模块都是从node_modules引进来如lodash
          minSize: 0,  // 大小限制
          minChunks: 1  // 最少复用过几次
        },
        // 公共的模块
        common: {
          name: 'common', // chunk 名称
          priority: 0, // 优先级
          minSize: 0,  // 公共模块的大小限制
          minChunks: 2  // 公共模块最少复用过几次
      }
      },
    },
    runtimeChunk: 'single',
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false  // 打包时不生成LICENCE.txt
      }),
    ],
  },
  externals:{}, // 外部CDN等扩展
  stats: 'minimal'  // 控制台输出信息
};

module.exports = config;