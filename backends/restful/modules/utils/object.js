/**
 *
 * @param {*} target 目标数组
 * @param {*} data 参考数组
 *
 * @description 用于检查两组参数的是否存在区别
 */
const getCompare = (target, data) => {
  target.forEach(item => {
    if (!data.includes(item)) {
      return false;
    }
  });

  return true;
};

/**
 *
 * @param {*} obj 目标对象
 *
 * @description
 */
const getActual = obj => {
  let container = {};
  Object.keys(obj).forEach(item => {
    const value = obj[item];
    if (value) {
      container[item] = value;
    }
  });
  return container;
};

/**
 *
 * @param {*} obj
 */
const isEmpty = obj => {
  return Object.keys(obj).length ? false : true;
};

/**
 *
 * @param {*} obj
 * @param {*} prototypes
 */
const isComplete = (obj, prototypes) => {
  const cache = getActual(obj);
  const keys = Object.keys(cache);
  if (!getCompare(prototypes, keys)) {
    return false;
  }
  if (!getCompare(keys, prototypes)) {
    return false;
  }

  return true;
};

module.exports = {
  getCompare,
  getActual,
  isEmpty,
  isComplete,
};
