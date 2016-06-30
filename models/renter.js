'use strict';

const mongoose = require('mongoose');

let renterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Enter Your Full Name']
  },
  email: {
    type: String,
    match: /^\w+@\w+\.\w+$/,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    validate: {
      validator: function(val){
        return val.length > 9
      },
      message: 'phone is too short, please include areacode'
    },
    required: true
  },
  tenancy: {
    type: Number,
    required: [true, 'Please Enter Contract month(s)']
  }
});

let Renter = mongoose.model('Renter', renterSchema);

module.exports = Renter;
