const express = require('express');

const router = express.Router();

const utils = require('../modules/utils/error');

const mongo = require('../modules/mongo');

router.delete('/article/:identify', async (req, res, next) => {
  try {
    const { identify } = req.params;

    const { Article } = mongo.entity;

    await Article.remove({ identify });

    res.json({
      status: 'success',
    });
  } catch (error) {
    next(error);
  }
});

router.delete('column/:identify', async (req, res, next) => {
  try {
    const { identify } = req.params;

    const { Column } = mongo.entity;

    await Article.remove({ identify });

    res.json({
      status: 'success',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
