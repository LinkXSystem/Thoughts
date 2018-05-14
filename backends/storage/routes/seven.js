const express = require('express');

const router = express.Router();

const seven = require('../modules/seven-cloud/token.js');

const config = require('../config/cloud-config.json');

router.get('/seven', (req, res, next) => {
  try {
    const mac = seven.getMac(config.seven.access, config.seven.secret);
    const token = seven.getToken(mac, config.seven.bucket);
    res.json({
      zone: config.seven.zone,
      domain: config.seven.domain,
      token,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
