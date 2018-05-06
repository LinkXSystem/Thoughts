const express = require('express');

const router = express.Router();

const utils = require('../modules/utils/error');

const mongo = require('../modules/mongo');

router.post('/article', async (req, res, next) => {
  try {
    const { identify } = (obj = req.body);

    const { Article } = mongo.entity;

    console.log('====================================');
    console.log(identify);
    console.log('====================================');

    delete obj['identify'];

    const data = await Article.update({ identify }, obj, { multi: true });

    res.json({
      status: 'success',
      message: '更新成功',
    });
  } catch (error) {
    next(error);
  }
});

router.post('/column', async (req, res, next) => {
  try {
    const { identify } = (obj = req.body);

    const { Column } = mongo.entity;

    console.log('====================================');
    console.log(identify);
    console.log('====================================');

    delete obj['identify'];

    const data = await Column.update({ identify }, obj, { multi: true });

    res.json({
      status: 'success',
      message: '更新成功',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
