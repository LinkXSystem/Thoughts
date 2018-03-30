const express = require('express');
const router = express.Router();

const utils = require('../modules/utils/error');

const mongo = require('../modules/mongo');

/**
 * @description 存储文章
 */
router.post('/article', async (req, res, next) => {
  try {
    const cache = Object.assign({}, req.body);
    const data = await mongo.Article.create(cache);
    res.json({
      state: 200,
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
    const cache = Object.assign({}, req.body);
    const data = await mongo.Article.create(cache);
    res.json({
      state: 200,
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
    const cache = Object.assign({}, req.body);
    const data = await mongo.Article.create(cache);
    res.json({
      state: 200,
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
    const cache = Object.assign({}, req.body);
    const data = await mongo.Article.create(cache);
    res.json({
      state: 200,
    });
  } catch (error) {
    next(error);
  }
});
