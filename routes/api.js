'use strict';

const express = require('express');

let router = express.Router();

router.use('/apartments', require('./apartments'));

module.exports = router;
