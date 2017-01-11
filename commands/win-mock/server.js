const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

//init app
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

app.use((req, res, next) => {
    let err = new Error('Not found!');

    err.status = 404;
    next(err);
});

app.listen(3000);
module.exports = app;