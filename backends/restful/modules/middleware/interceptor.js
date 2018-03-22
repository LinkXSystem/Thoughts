const utils = require('../utils/error');
const redis = require('../redis');

const verifytoken = async (req, res, next) => {
  const auth = req.headers['x-auth-token'];

  if (!auth) {
    return next(utils.error(401, 'verify', 'authenticating'));
  }

  const result = await redis.get(auth);

  if (!result) {
    return next(utils.error(401, 'verify', 'authenticating'));
  }

  return next();
};

module.exports = {
  verifytoken
};
