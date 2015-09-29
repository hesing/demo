var express = require("express");
var	ProjectTaskCreation = require("../models/ProjectTaskCreation.js");
var ProjectTaskCreationRouter = express.Router();

module.exports = function(){
	ProjectTaskCreationRouter.route("/")
		// exact match
		.get(function(req, res){
			ProjectTaskCreation.find(req.query, function(err, records){
				if(err){
					res.status(500).send(err);
				} else {
					res.json(records);
				}
			});
		})
		// contains match ( including exact match)
		// .get(function(req, res){
		// 	ProjectTaskCreation.find({ 'name': new RegExp(req.query.name, 'i'), 'description': new RegExp(req.query.description, 'i')}).sort('name').exec(function(err, records) {
		// 	   	if(err){
		// 			res.status(500).send(err);
		// 		} else {
		// 			res.json(records);
		// 		}
		// 	});
		// })
		.post(function(req, res){
			var dbInstance = new ProjectTaskCreation(req.body);

			dbInstance.save(function(err, dbInstance){
				if(err){
					res.status(500).send(err);
				} else {
					res.status(201).json(dbInstance);
				}
			});
		});

	ProjectTaskCreationRouter.route("/:id")
		.get(function(req, res){

			ProjectTaskCreation.findById(req.params.id, function(err, records){
				if(err){
					res.status(500).send(err);
				} else {
					res.json(records);
				}
			});
		})
		.put(function(req, res){
			ProjectTaskCreation.findByIdAndUpdate(req.params.id, req.body, function(err, record) {
				if(err){
					res.status(500).send(err);
				} else {
					res.json(record);
				}
			});
		})
		.delete(function(req, res){
			ProjectTaskCreation.findByIdAndRemove(req.params.id, function(err, data) {
				if(err){
					res.status(500).send(err);
				} else {
					res.status(204).json({message: "record successfully deleted"});
				}
			});
		});


	return ProjectTaskCreationRouter;
};
