var express = require('express');
const bodyParser = require(body-parser);
const mongodb = require('./db/connect');

var app = express();
const port = process.env.PORT || 8080;

app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/', require('./routes'));

mongodb.initDb((err, mongoDb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log('Connected to DB and listening on port ${port}');
    }
});