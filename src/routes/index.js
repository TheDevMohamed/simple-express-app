var express = require('express');
const mongoose = require('mongoose');
const os = require("os");
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  console.log(`traffic from ${os.hostname()}`);
  res.send(`<h1>ENV: ${process.env.NODE_ENV} From docker hub! Using watch tower!!!!</h1>`);
});

module.exports = router;
