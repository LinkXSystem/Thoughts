const express = require('express');

const router = express.Router;

router.get('/key', (req, res, next) => {
  req.json({});
});

module.exports = router;
