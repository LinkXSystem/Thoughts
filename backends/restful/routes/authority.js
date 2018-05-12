const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4');

const variable = require('../modules/utils/variable');
const utils = require('../modules/utils/error');
const confuse = require('../modules/utils/confuse');

const mongo = require('../modules/mongo');

router.post('/signin', async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    if (!email || !password) {
      throw utils.error(400, 'verify', 'information is abnormal');
    }

    if (!email.match(variable.regex)) {
      throw utils.error(400, 'verify', 'information is abnormal');
    }

    const { User } = mongo.entity;

    const data = await User.findOne(
      {
        email: email,
        password: confuse.encrypt(password),
      },
      { _id: false, password: false, register: false, __v: false },
    );

    if (!data) throw utils.error(401, 'verify', 'the user is not found');

    res.json({ status: 'success', data: data });
  } catch (err) {
    return err.name !== 'MongoError'
      ? next(err)
      : next(utils.error(400, 'verify', `${email} is abnormal`));
  }
});

// 由于是唯一注册，故关闭注册接口
router.post('/signup', async (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  try {
    if (!username || !email || !password) {
      throw utils.error(400, 'verify', 'information is abnormal');
    }

    if (!email.match(variable.regex)) {
      throw utils.error(400, 'verify', 'information is abnormal');
    }

    const { User } = mongo.entity;

    const data = await User.create({
      identify: uuid(),
      username: username,
      email: email,
      password: confuse.encrypt(password),
      fingerprint: '',
      position: '',
      description: '',
    });

    res.json({ statu: 'success', data: data });
  } catch (err) {
    return err.name !== 'MongoError'
      ? next(err)
      : next(utils.error(400, 'verify', `${email} is abnormal`));
  }
});

router.post('/fingerprint', async (req, res, next) => {
  try {
    const { fingerprint } = req.body;
    const { User } = mongo.entity;
    const data = await User.findOne({
      fingerprint,
    });

    if (!data) {
      return res.json({
        status: 'error',
        message: 'the client is not within the scope of authorization',
      });
    }

    res.json({
      status: 'success',
      message: 'launch authorization',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
