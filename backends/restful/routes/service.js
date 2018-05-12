const express = require('express');
const router = express.Router();

const utils = require('../modules/utils/error');

const mongo = require('../modules/mongo');

router.get('/resume', async (req, res, next) => {
  try {
    const { User } = mongo.entity;
    const data = await User.findOne(
      {},
      { _id: false, __v: false, register: false, password: false },
    );
    return res.json({
      status: 'success',
      data: data,
    });
  } catch (error) {
    next(error);
  }
});

router.get('/account', async (req, res, next) => {
  try {
    if (!req.query.name)
      throw utils.error(404, 'verify', 'the name of field is empty');

    const { Account } = mongo.entity;

    const data = await Account.findOne(
      {
        name: name,
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

/**
 * @description 获取文章
 */
router.post('/article', async (req, res, next) => {
  try {
    const term = Object.assign({}, req.body);

    const { Article } = mongo.entity;

    const data = await Article.find(term, {
      _id: false,
      __v: false,
    });

    return res.json({
      status: 'success',
      list: data,
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @description 获取专栏
 */
router.post('/column', async (req, res, next) => {
  try {
    const term = Object.assign({}, req.body);
    const { Column } = mongo.entity;

    const data = await Column.find(term, { _id: false, __v: false });

    return res.json({
      status: 'success',
      list: data,
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @description 获取注脚
 */
router.post('/footnote', async (req, res, next) => {
  try {
    const term = Object.assign({}, req.body);

    const { Footnote } = mongo.entity;

    const data = await Footnote.find(term, { _id: false, __v: false });

    return res.json({
      status: 'success',
      list: data,
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @description 获取公告
 */
router.post('/notice', async (req, res, next) => {
  try {
    const term = Object.assign({}, req.body);

    const { Notice } = mongo.entity;

    const data = await Notice.find(term, { _id: false, __v: false });

    return res.json({
      status: 'success',
      list: data,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
