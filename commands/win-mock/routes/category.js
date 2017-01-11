const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

        res.end('get category');
    })
    .get('/i', (req, res, next) => {
        res.end('list');
    });

module.exports = router;