'use strict';

const express = require('express');
let Renter = require('../models/renter');


let router = express.Router();



router.route('/')
  .get((req, res)=>{
    Renter.find({},(err, renters)=>{
      res.status(err ? 400 : 200).send(err || renters);
    });
  })
  .post((req, res)=>{
    Renter.create(req.body, (err)=>{
      res.status(err ? 400 : 200).send(err);
    });
  })
  .delete((req, res)=>{
    Renter.remove({},(err)=>{
      res.status(err ? 400 : 200).send(err);

    });
  })


// DELETE /api/renters/:id

router.route('/:id')
  .get((req,res)=>{
    Renter.findById(req.params.id, (err,renter)=>{
      res.status(err ? 400:200).send(err || renter);
    });
  })
  .delete((req,res)=>{
    Renter.findByIdAndRemove(req.params.id,err=>{
      res.status(err ? 400: 200).send(err);
    });
  })
  .put((req,res)=>{
    Renter.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, savedDoc)=>{
      res.status(err ? 400: 200).send((err || savedDoc));
    });
  })

module.exports = router;
