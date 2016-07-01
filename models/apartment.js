'use strict';

const mongoose = require('mongoose');

let apartmentSchema = new mongoose.Schema({
  name: {type: String, required: true},
  roomInfo: {type: String},
  capacity: {type: Number, min: 0},
  createdAt: {type: Date, default: Date.now},
  renters: [{type: mongoose.Schema.Types.ObjectId, ref: 'Renter'}]
});

let Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;
