'use strict';

const mongoose = require('mongoose');

let renterSchema = new mongoose.Schema({
  name: {type: String, required: true},
  contract: {type: Number}
});

let Renter = mongoose.model('Renter', renterSchema);

module.exports = Renter;
