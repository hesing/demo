var express = require("express");
var	newstretchcode = require("../models/newstretchcode.js");
var newstretchcodeRouter = express.Router();

module.exports = function(){
	newstretchcodeRouter.route("/")
		// exact match
		.get(function(req, res){
			newstretchcode.find(req.query, function(err, records){
				if(err){
					res.status(500).send(err);
				} else {
					res.json(records);
				}
			});
		})
		// contains match ( including exact match)
		// .get(function(req, res){
		// 	newstretchcode.find({ 'name': new RegExp(req.query.name, 'i'), 'about': new RegExp(req.query.description, 'i')}).sort('name').exec(function(err, records) {
		// 	   	if(err){
		// 			res.status(500).send(err);
		// 		} else {
		// 			res.json(records);
		// 		}
		// 	});
		// })
		.post(function(req, res){
			var dbInstance = new newstretchcode(req.body);

			dbInstance.save(function(err, dbInstance){
				if(err){
					res.status(500).send(err);
				} else {
					res.status(201).json(dbInstance);
				}
			});
		});

	newstretchcodeRouter.route("/:id")
		.get(function(req, res){

			newstretchcode.findById(req.params.id, function(err, records){
				if(err){
					res.status(500).send(err);
				} else {
					res.json(records);
				}
			});
		})
		.put(function(req, res){
			newstretchcode.findByIdAndUpdate(req.params.id, req.body, function(err, record) {
				if(err){
					res.status(500).send(err);
				} else {
					res.json(record);
				}
			});
		})
		.delete(function(req, res){
			newstretchcode.findByIdAndRemove(req.params.id, function(err, data) {
				if(err){
					res.status(500).send(err);
				} else {
					res.status(204).json({message: "record successfully deleted"});
				}
			});
		});
	

	return newstretchcodeRouter;
};
