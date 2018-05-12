const qiniu = require('qiniu');

const getMac = (access, secret) => {
  return new qiniu.auth.digest.Mac(access, secret);
};

module.exports = {
  getMac,
};
