/**
 * 项目相关配置文件
 */
import router from './router';
import logo from '@/assets/images/logo.png';

export default {
  name: '多页模板', // 项目名称
  logo,  // 项目logo
  favicon: logo,
  mode: 'side', // 布局模式：top(顶部导航) | side(侧边导航), 默认顶部导航
  router
}