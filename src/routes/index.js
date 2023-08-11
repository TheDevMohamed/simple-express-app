var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  res.send(`<h1>ENV: ${process.env.NODE_ENV} From docker hub!</h1>`);
});

module.exports = router;
