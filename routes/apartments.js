'use strict';

const express = require('express');
let Apartment = require('../models/apartment');


let router = express.Router();



router.route('/')
  .get((req, res)=>{
    Apartment.find({})
    .populate('renters')
    .exec(res.handler)
  })
  .post((req, res)=> Apartment.create(req.body, res.handler))
  .delete((req, res)=> Apartment.remove({},res.handler));


// DELETE /api/apartments/:id

router.route('/:id')
  .get((req,res)=> Apartment.findById(req.params.id, res.handler))
  .delete((req,res)=> Apartment.findByIdAndRemove(req.params.id,res.handler))
  .put((req,res)=> Apartment.findByIdAndUpdate(req.params.id, req.body, {new: true},res.handler));

/// PUT /api/apartment/4987554894/addRenter/7547942734838
  router.put('/:apartmentId/addRenter/:renterId',(req,res)=>{

    Apartment.findById(req.params.apartmentId, (err, apartment)=>{
      if(err || !apartment) return res.status(400).send(err || {error: 'Apartment not found'});

      apartment.renters.push(req.params.renterId);
      apartment.save((err, savedApartment)=>{
        res.status(err ? 400 : 200).send(err || savedApartment);
      })
    })
  })

module.exports = router;
