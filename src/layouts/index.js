import layout from './layout';
import header from './header';
import sideMenu from './sideMenu';
import footer from './footer';

import configs from '@/configs';
import { arrayToObj } from '@/utils/utils';

const { router, name, logo, mode = 'side' } = configs;
const routerMaps = arrayToObj(router, 'name');

/**
 * 
 * @param {key} 单个页面的独立key, 用户解析页面的title或者其它私有内容 
 * @param {hasFooter} 是否开启footer组件
 * @param {container} 页面主区域内容
 */
const htmlRender = ({ 
  key, 
  hasFooter = true, 
  container
}) => {
  return layout({
    key, // 页面独立key
    ...configs,
    title: `${routerMaps[key].title}-${name}`, // 页面标题
    header: header({mode, key, logo, router}),
    sideMenu: sideMenu({key, logo, router}),
    container: container || '',
    footer: hasFooter ? footer() : ''
  });  
}

export default htmlRender;