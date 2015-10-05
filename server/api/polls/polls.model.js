'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollsSchema = new Schema({
  user: String,
  question: String,
  answers: [String],
  votes: [Number],
  voters:[String]
});

module.exports = mongoose.model('Polls', PollsSchema);