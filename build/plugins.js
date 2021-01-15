const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html解析
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清除历史文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  // css抽离
const CopyWebpackPlugin = require("copy-webpack-plugin"); // 静态文件复制


const pages = require('../src/configs/router');

const plugins = [];

pages.forEach(page => {
  plugins.push(
    new HtmlWebpackPlugin({ // 多页面配置
      filename: `${page.name}.html`,  // 页面名称
      template: path.resolve(__dirname, '../src', `${page.path}/index`),  // 页面模板
      chunks: [page.name],  // js chunks
    })
  );
});
plugins.push(
  new MiniCssExtractPlugin({
    filename: "css/[name].[fullhash:8].css",
  })
);

if (process.env.NODE_ENV === 'development') {
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),  // 热更新相关
  );
} else {
  plugins.push(
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),  // 清除历史打包文件
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/assets",
          to: "assets"
        }
      ]
    })
  );
}


module.exports = plugins;