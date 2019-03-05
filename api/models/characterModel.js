'use strict';
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;


var CharacterSchema = new Schema({
  title: {
    type: String,
    required: 'The character title'
  },
  content: {
    type: String,
    required: 'The character info'
  },
  image: {
    type: String,
    required: 'The character picture'
  }
});

CharacterSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Characters', CharacterSchema);
