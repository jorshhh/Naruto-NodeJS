'use strict';
module.exports = function(app) {
  var characters = require('../controllers/characterController');

  // todoList Routes
  app.route('/characters')
    .get(characters.get_character_list)

  app.route('/characters/:characterId')
    .get(characters.get_character)
};
