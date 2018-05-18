const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const utils = require('./modules/utils/error');

const app = new express();

// 日志处理
const log = global.log4js.getLogger('error');

// const account = require('./routes/account');
const seven = require('./routes/seven');

app.disable('x-powered-by');

app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

app.use(
  global.log4js.connectLogger(global.log4js.getLogger('http'), {
    level: 'auto',
  }),
);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

// app.use('/api/v1/storage', account);
app.use('/cloud/v1', seven);

app.use((req, res, next) => {
  next(utils.error(404, 'verify', 'server system rejected the reaction'));
});

app.use((err, req, res, next) => {
  log.error(`code: ${err.code}, name: ${err.name}, message: ${err.message} `);
  res.status(err.code || 500);
  res.set({
    'Content-Type': 'application/json',
  });
  return res.json({ statu: 'error', message: err.message });
});

module.exports = app;
