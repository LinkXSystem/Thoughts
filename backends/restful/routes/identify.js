const express = require('express');

const router = express.Router();

const utils = require('../modules/utils/error');

const mongo = require('../modules/mongo');

/**
 * @description 获取用户的简介信息
 */
router.get('/resume', async (req, res, next) => {
  try {
    const { User } = mongo.entity;

    const data = await User.findOne(
      {},
      {
        _id: false,
        __v: false,
        identify: false,
        register: false,
        password: false,
        fingerprint: false,
      },
    );

    return res.json({
      status: 'success',
      data,
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @description 获取第三方账号信息
 */
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

router.get('/note/:identify', async (req, res, next) => {
  try {
    const { identify } = req.params;

    const { Note } = mongo.entity;

    const data = await Note.findOne(
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

/**
 * @description 专栏选择器
 */
router.get('/simple/column', async (req, res, next) => {
  try {
    const { Column } = mongo.entity;

    const data = await Column.find(
      {},
      {
        _id: false,
        date: false,
        description: false,
        __v: false,
      },
    );

    res.json({
      status: 'success',
      list: data,
    });
  } catch (error) {
    next(error);
  }
});

router.get('/notice', async (req, res, next) => {
  try {
    const { Notice } = mongo.entity;

    const data = await Notice.find({ _id: false, __v: false }).sort({
      date: 1,
    });

    res.json({
      status: 'success',
      data: data[0],
    });
  } catch (error) {
    next(error);
  }
});

router.get('/footnote', async (req, res, next) => {
  try {
    const { Footnote } = mongo.entity;

    const data = await Footnote.find({ _id: false, __v: false }).sort({
      date: 1,
    });

    res.json({
      status: 'success',
      data: data[0],
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
