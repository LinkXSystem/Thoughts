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
        password: confuse.encryptpassword(password),
      },
      { _id: false, __v: false },
    );

    res.json({ statu: 'success', data: data });
  } catch (err) {
    return err.name !== 'MongoError'
      ? next(err)
      : next(utils.error(400, 'verify', `${email} is abnormal`));
  }
});

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
      password: confuse.encryptpassword(password),
    });

    res.json({ statu: 'success', data: data });
  } catch (err) {
    return err.name !== 'MongoError'
      ? next(err)
      : next(utils.error(400, 'verify', `${email} is abnormal`));
  }
});

module.exports = router;
