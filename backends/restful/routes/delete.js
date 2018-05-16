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

router.delete('/column/:identify', async (req, res, next) => {
  try {
    const { identify } = req.params;

    const { Column, Article } = mongo.entity;

    await Column.remove({ identify });

    await Article.update(
      {
        column: identify,
      },
      {
        column: '',
      },
      { multi: true },
    );

    res.json({
      status: 'success',
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/note/:identify', async (req, res, next) => {
  try {
    const { identify } = req.params;

    const { Note } = mongo.entity;

    await Note.remove({ identify });

    res.json({
      status: 'success',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
