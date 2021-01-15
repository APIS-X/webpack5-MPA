/**
 * 多页面路由配置
 * @param {name} 页面独立key
 * @param {path} 页面路径
 * @param {title} 页面标题
 */
module.exports = [
  {
    name: 'index',
    path: 'pages/index',
    title: '首页'
  },
  {
    name: 'about',
    path: 'pages/about',
    title: '关于我们'
  },
  {
    name: 'login',
    path: 'pages/login',
    title: '登录'
  },
  {
    name: 'demo',
    path: 'pages/demo',
    title: 'Demo'
  }
];