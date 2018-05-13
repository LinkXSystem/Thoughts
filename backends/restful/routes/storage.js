const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4');

const utils = require('../modules/utils/error');

const mongo = require('../modules/mongo');

const object = require('../modules/utils/object');

/**
 * @description 存储文章
 */
router.post('/article', async (req, res, next) => {
  try {
    const obj = req.body;

    if (object.isEmpty(obj)) {
      throw utils.error(404, 'verify', 'the object of data is empty');
    }

    if (!object.isComplete(obj, ['title', 'icons', 'content'])) {
      throw utils.error(404, 'verify', 'the object of data is not satisfiable');
    }

    const cache = Object.assign(
      {
        identify: uuid(),
        date: new Date(),
      },
      req.body,
    );
    const { Article } = mongo.entity;
    const data = await Article.create(cache);
    res.json({
      state: 'success',
      message: '数据存储成功',
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @description 存储草稿
 */
router.post('/draft', async (req, res, next) => {
  try {
    const obj = req.body;

    if (object.isEmpty(obj)) {
      throw utils.error(404, 'verify', 'the object of data is empty');
    }

    if (!object.isComplete(obj, ['title', 'icons', 'content'])) {
      throw utils.error(404, 'verify', 'the object of data is not satisfiable');
    }

    const cache = Object.assign(
      {
        identify: uuid(),
        date: new Date(),
      },
      req.body,
    );
    const { Draft } = mongo.entity;

    const data = await Draft.create(cache);

    res.json({
      state: 'success',
      message: '数据存储成功',
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @description 存储笔记
 */
router.post('/note', async (req, res, next) => {
  try {
    const obj = req.body;

    if (object.isEmpty(obj)) {
      throw utils.error(404, 'verify', 'the object of data is empty');
    }

    if (!object.isComplete(obj, ['title', 'icons', 'content'])) {
      throw utils.error(404, 'verify', 'the object of data is not satisfiable');
    }

    const cache = Object.assign(
      {
        identify: uuid(),
        date: new Date(),
      },
      req.body,
    );
    const { Note } = mongo.entity;

    const data = await Note.create(cache);

    res.json({
      state: 'success',
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
        date: new Date(),
      },
      req.body,
    );

    const { Column } = mongo.entity;

    const data = await Column.create(cache);

    res.json({
      state: 'success',
      message: '数据存储成功',
    });
  } catch (error) {
    next(error);
  }
});

router.post('/account', async (req, res, next) => {
  try {
    const cache = Object.assign(
      {
        identify: uuid(),
        type: 'simple',
        date: new Date(),
      },
      req.body,
    );

    const { Account } = mongo.entity;

    const data = await Account.create(cache);

    res.json({
      state: 'success',
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
        date: new Date(),
      },
      req.body,
    );

    const { Notice } = mongo.entity;

    const data = await Notice.create(cache);

    res.json({
      state: 'success',
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
        identify: uuid(),
        date: new Date(),
      },
      req.body,
    );
    const { Footnote } = mongo.entity;

    const data = Footnote.create(cache);

    res.json({
      state: 'success',
      message: '数据存储成功',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
