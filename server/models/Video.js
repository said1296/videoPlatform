const express = require('express');
const mongoose = require('mongoose');
require("./User.js");

const videoSchema = mongoose.Schema({
  "title": {
    type: String,
    required: true
  },
  "description": String,
  "likes": {
      type: Number,
  },
  "uploaded": {
    type: Date,
    default: Date.now
  },
  "user": {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true
  }
});

module.exports = Video = mongoose.model('Video', videoSchema);