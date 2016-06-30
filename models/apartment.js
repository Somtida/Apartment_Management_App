'use strict';

const mongoose = require('mongoose');

let apartmentSchema = new mongoose.Schema({
  name: {type: String, required: true},
  roomInfo: {type: String},
  guestAmount: {type: Number, min: 1, max: 8},
  createdAt: {type: Date, default: Date.now},
  renters: [{type: mongoose.Schema.Types.ObjectId, ref: 'Renter'}]
});

let Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;
