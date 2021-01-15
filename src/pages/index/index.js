import template from './template';
import htmlRender from '@/layouts/index';


const dataBanner = [1,2,3,4,5,6];

const container = template({  // 此处注入页面相关参数
  dataBanner
});

export default htmlRender({
  key: 'index',
  container
});
