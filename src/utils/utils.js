/**
 * 统一过滤前后端交互的ajax数据对象
 * @param {*待过滤的数据对象} params
 */
export const dataFilters = (params = {}) => {
  for (let key in params) {
    if (params[key] === '') {
      delete params[key];
    }
  }
  return params;
};

/**
 * 将对象转换为以key对应的值为内容的数组
 * @param {Object} enums (将要转换的对象)
 */
export const objToArray = (enums = {})=> {
  const arr = [];
  Object.keys(enums).forEach(key => {
    arr.push(enums[key]);
  });
  return arr;
}

/**
 * 将数组转换为以指定字段为key的对象
 * @param {Array} arrs (将要转换的数组)
 * @param {String} key (以哪个字段作为对象的key)
 */
export const arrayToObj = (arrs = [], key = 'id')=> {
  const params = {};
  for(let i = 0, len = arrs.length; i < len; i++ ) {
    const item = arrs[i];
    params[item[key]] = item;
  }
  return params;
}

/**
 * 判断数据类型
 * @param {*} data
 */
export const dataTypeCheck = data=> {
  return Object.prototype.toString.call(data);
}
