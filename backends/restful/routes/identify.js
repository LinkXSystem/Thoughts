const express = require('express');

const router = express.Router();

const utils = require('../modules/utils/error');

const mongo = require('../modules/mongo');

router.get('/article/:identify', async (req, res, next) => {
  try {
    const { identify } = req.params;

    const { Article } = mongo.entity;

    const data = await Article.findOne(
      {
        identify,
      },
      { _id: false, __v: false },
    );

    res.json({
      status: 'success',
      data,
    });
  } catch (error) {
    next(error);
  }
});

router.get('/column/:identify', async (req, res, next) => {
  try {
    const { identify } = req.params;

    const { Column } = mongo.entity;

    const data = await Column.findOne(
      {
        identify,
      },
      { _id: false, __v: false },
    );

    res.json({
      status: 'success',
      data,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
