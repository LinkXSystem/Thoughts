const express = require('express');

const router = express.Router();

router.get('/storage', (req, res, next) => {
  try {
    const { server, level } = req.body;

    res.json({});
  } catch (error) {
    next(error);
  }
});

module.exports = router;
