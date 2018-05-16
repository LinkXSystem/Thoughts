const express = require('express');
const router = express.Router();

const utils = require('../modules/utils/error');

const mongo = require('../modules/mongo');

router.post('/article', async (req, res, next) => {
  try {
    const term = Object.assign({}, req.body);

    const regx = new RegExp(term.key, 'i');

    const { Article } = mongo.entity;

    const data = await Article.find(
      {
        title: regx,
      },
      {
        _id: false,
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

module.exports = router;
