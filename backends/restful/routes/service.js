const express = require('express');
const router = express.Router();

const utils = require('../modules/utils/error');

const mongo = require('../modules/mongo');

/**
 * @description 获取文章
 */
router.get('/article', (req, res) => {});

/**
 * @description 获取专栏
 */
router.get('/column', (req, res) => {});

/**
 * @description 获取注脚
 */
router.get('/footnote', (req, res) => {});

/**
 * @description 获取公告
 */
router.get('/notice', (req, res) => {});
