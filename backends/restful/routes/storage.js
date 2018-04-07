const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4');

const utils = require('../modules/utils/error');

const mongo = require('../modules/mongo');

/**
 * @description 存储文章
 */
router.post('/article', async (req, res, next) => {
  try {
    const cache = Object.assign(
      {
        identify: uuid(),
      },
      req.body,
    );
    const { Article } = mongo.entity;
    const data = await Article.create(cache);
    res.json({
      state: 'successs',
      message: '数据存储成功',
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @description 存储专栏
 */
router.post('/column', async (req, res, next) => {
  try {
    const cache = Object.assign(
      {
        identify: uuid(),
      },
      req.body,
    );
    const { Column } = mongo.entity;
    const data = await Column.create(cache);
    res.json({
      state: 'successs',
      message: '数据存储成功',
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @description 存储注脚
 */
router.post('/footnote', async (req, res, next) => {
  try {
    const cache = Object.assign(
      {
        identify: String,
      },
      req.body,
    );
    const { Footnote } = mongo.entity;
    const data = Footnote.create(cache);
    res.json({
      state: 'successs',
      message: '数据存储成功',
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @description 存储公告
 */
router.post('/notice', async (req, res, next) => {
  try {
    const cache = Object.assign(
      {
        identify: uuid(),
      },
      req.body,
    );
    const { Notice } = mongo.entity;
    const data = await Notice.create(cache);
    res.json({
      state: 'successs',
      message: '数据存储成功',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
