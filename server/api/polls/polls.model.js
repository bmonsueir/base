'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollsSchema = new Schema({
  question: String,
  answers: [String],
  votes: [Number]
});

module.exports = mongoose.model('Polls', PollsSchema);