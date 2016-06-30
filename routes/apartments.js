'use strict';

const express = require('express');
let Apartment = require('../models/apartment');


let router = express.Router();



router.route('/')
  .get((req, res)=>{
    Apartment.find({}, (err, apartments)=>{
      res.status(err ? 400 : 200).send(err || apartments);
    });
  })
  .post((req, res)=>{
    Apartment.create(req.body, (err)=>{
      res.status(err ? 400 : 200).send(err);
    });
  })
  .delete((req, res)=>{
    Apartment.remove({},(err)=>{
      res.status(err ? 400 : 200).send(err);

    });
  })


// DELETE /api/apartments/:id

router.route('/:id')
  .get((req,res)=>{
    Apartment.findById(req.params.id, (err,apartment)=>{
      res.status(err ? 400:200).send(err || apartment);
    });
  })
  .delete((req,res)=>{
    Apartment.findByIdAndRemove(req.params.id,err=>{
      res.status(err ? 400: 200).send(err);
    });
  })
  .put((req,res)=>{
    Apartment.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, savedDoc)=>{
      res.status(err ? 400: 200).send((err || savedDoc));
    });
  })

module.exports = router;
