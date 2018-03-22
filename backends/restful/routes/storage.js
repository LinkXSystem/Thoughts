const express = require('express');
const router = express.Router();

const utils = require('../modules/utils/error');

const mongo = require('../modules/mongo');

/**
 * @description 存储文章
 */
router.get('/article', (req, res) => {});

/**
 * @description 存储专栏
 */
router.get('/column', (req, res) => {});

/**
 * @description 存储注脚
 */
router.get('/footnote', (req, res) => {});

/**
 * @description 存储公告
 */
router.get('/notice', (req, res) => {});
