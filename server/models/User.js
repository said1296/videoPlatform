const express = require('express');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  "name": {
    type: String,
    required: true
  },
  "birthday": Date,
  "sex": String,
  "bio": Date,
  "user": String
});

module.exports = User = mongoose.model('User', userSchema);