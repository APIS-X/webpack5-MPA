const settings = require('./settings');

const entrys = {};
settings.routers.forEach(page=> {
  entrys[page.name] = settings.pathEntry(page.path);
});

module.exports = entrys;