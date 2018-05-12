const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const utils = require('./modules/utils/error');

const identify = require('./routes/identify');
const list = require('./routes/list');

const authority = require('./routes/authority');

const storage = require('./routes/storage');
const obtain = require('./routes/obtain');
const update = require('./routes/update');
const deletes = require('./routes/delete');

// const interceptor = require('./modules/middleware/interceptor');

const app = new express();

// 日志处理
const log = global.log4js.getLogger('error');

app.disable('x-powered-by');

//跨域配置
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(
  global.log4js.connectLogger(global.log4js.getLogger('http'), {
    level: 'auto',
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 处理数据访问
app.use('/api/v1', identify);
app.use('/api/v1', list);

// 处理凭证
// app.use(interceptor.verifytoken);

// 处理访问授权
app.use('/auth', authority);

// 处理数据
app.use('/storage', storage);
app.use('/obtain', obtain);
app.use('/update', update);
app.use('/delete', deletes);

app.use((req, res, next) => {
  next(utils.error(404, 'verify', 'server system rejected the reaction'));
});

app.use((err, req, res, next) => {
  log.error(`code: ${err.code}, name: ${err.name}, message: ${err.message} `);
  res.status(err.code || 500);
  res.set({
    'Content-Type': 'application/json',
  });
  return res.json({ status: 'error', message: err.message });
});

module.exports = app;
