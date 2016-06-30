'use strict';

const express = require('express');

let router = express.Router();

router.use('/apartments', require('./apartments'));
router.use('/renters', require('./renters'));

module.exports = router;
