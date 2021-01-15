const path =  require('path');
const pages = require('../src/configs/router');

const entrys = {};
pages.forEach(page=> {
  entrys[page.name] = path.resolve(__dirname, `../src/${page.path}/main`);
});

module.exports = entrys;