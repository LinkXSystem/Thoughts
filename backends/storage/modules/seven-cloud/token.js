const qiniu = require('qiniu');

const getMac = (access, secret) => {
  return new qiniu.auth.digest.Mac(access, secret);
};

const getToken = (mac, bucket, expires = 7200) => {
  const options = {
    scope: bucket,
    expires,
  };

  const policy = new qiniu.rs.PutPolicy(options);

  return policy.uploadToken(mac);
};

module.exports = {
  getMac,
  getToken,
};
