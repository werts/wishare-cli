const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.end('get template');
});

module.exports = router;