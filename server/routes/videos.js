const express = require('express');
const mongoose = require('mongoose'); 
const router = express.Router();

require("../models/Video.js");

router.post('/', (req, res) => {
  console.log(req.body.query);
  var query = {}

  if(req.body.query!=""){
    const queryRegex = new RegExp(".*"+req.body.query+"-*");
    query = {title: {$regex: queryRegex, $options: 'i'}}
  }

  Video
  .find(query)
  .populate('user', 'name')
  .then(result => res.send(result))
  .catch(err => console.log(err));
});

/*
router.post('/', (req, res) => {
  const newVideo = new Video({
    "title": req.body.title
  })
  newVideo
    .save()
    .then( result => res.json(result) )
    .catch( err => console.log(err) );
});

*/

module.exports = router;