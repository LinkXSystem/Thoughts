const express = require('express');

const router = express.Router();

router.delete('/article/:identify', (req, res, next) => {
  console.log('====================================');
  console.log(res.params.identify);
  console.log('====================================');
  res.json({
    status: 'success',
  });
});

module.exports = router;
