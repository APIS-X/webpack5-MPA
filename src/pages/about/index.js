import template from './template';
import htmlRender from '@/layouts/index';

const container = template({  // 此处注入页面相关参数
});

export default htmlRender({
  key: 'about',
  container
});
