'use strict';

var mongoose = require('mongoose'),
  Character = mongoose.model('Characters');

exports.get_character_list = function(req, res) {
	
	
	var pageVar = req.query.page;
	
	var page = 1;
	
	if(pageVar != undefined){
		page = pageVar;
	}
			
    Character.paginate({}, { page: page, limit: 20, sort:"title" },function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
};

exports.get_character = function(req, res) {
    Character.findById(req.params.characterId, function(err, task) {
      
	  if(task == null)
		res.status(404);
	  
	  if (err)
        res.send(err);
      res.json(task);
    });
};

