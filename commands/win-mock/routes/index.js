const express = require('express');
const router = express.Router();

const project = require('./project');
const category = require('./category');
const template = require('./template');
const interface = require('./interface');

router.use('/project', project);
router.use('/category', category);
router.use('/interface', interface);
router.use('/template', template);

module.exports = router;