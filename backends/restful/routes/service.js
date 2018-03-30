const express = require('express');
const router = express.Router();

const utils = require('../modules/utils/error');

const mongo = require('../modules/mongo');

/**
 * @description 获取文章
 */
router.get('/article', async (req, res, next) => {
  try {
    const term = Object.assign({}, req.body);
    const data = await mongo.Article.find(term, { _id: false, __v: false });
    return res.json({
      code: 200,
      data: {
        articles: data,
      },
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @description 获取专栏
 */
router.get('/column', async (req, res, next) => {
  try {
    const term = Object.assign({}, req.body);
    const data = await mongo.Article.find(term, { _id: false, __v: false });
    return res.json({
      code: 200,
      data: {
        articles: data,
      },
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @description 获取注脚
 */
router.get('/footnote', async (req, res, next) => {
  try {
    const term = Object.assign({}, req.body);
    const data = await mongo.Article.find(term, { _id: false, __v: false });
    return res.json({
      code: 200,
      data: {
        articles: data,
      },
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @description 获取公告
 */
router.get('/notice', async (req, res, next) => {
  try {
    const term = Object.assign({}, req.body);
    const data = await mongo.Article.find(term, { _id: false, __v: false });
    return res.json({
      code: 200,
      data: {
        articles: data,
      },
    });
  } catch (error) {
    next(error);
  }
});
