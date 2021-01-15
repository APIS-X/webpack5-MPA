import template from './template';
import htmlRender from '@/layouts/index';

const container = template({  // 此处注入页面相关参数
});

export default htmlRender({
  key: 'login', // 页面唯一Key，需保持唯一性，与router-config中的配置保持一致
  container
});
