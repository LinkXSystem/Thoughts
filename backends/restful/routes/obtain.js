const express = require('express');
const router = express.Router();

const utils = require('../modules/utils/error');

const mongo = require('../modules/mongo');

/**
 * @description 获取用户的简介信息
 */
router.get('/user', async (req, res, next) => {
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

module.exports = router;
