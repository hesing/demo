var express = require("express");
var	GetPrimaryProduct = require("../models/GetPrimaryProduct.js");
var GetPrimaryProductRouter = express.Router();

module.exports = function(){
	GetPrimaryProductRouter.route("/")
		// exact match
		// .get(function(req, res){
		// 	GetPrimaryProduct.find(req.query, function(err, records){
		// 		if(err){
		// 			res.status(500).send(err);
		// 		} else {
		// 			res.json(records);
		// 		}
		// 	});
		// })
		// contains match ( including exact match)
		.get(function(req, res){
			GetPrimaryProduct.find({ 'name': new RegExp(req.query.name, 'i'), 'description': new RegExp(req.query.description, 'i')}).sort('name').exec(function(err, records) {
			   	if(err){
					res.status(500).send(err);
				} else {
					res.json(records);
				}
			});
		})
		.post(function(req, res){
			var primaryProduct = new GetPrimaryProduct(req.body);

			primaryProduct.save(function(err, primaryProduct){
				if(err){
					res.status(500).send(err);
				} else {
					res.status(201).json(primaryProduct);
				}
			});
		});

	GetPrimaryProductRouter.route("/:primaryProductId")
		.get(function(req, res){

			GetPrimaryProduct.findById(req.params.primaryProductId, function(err, records){
				if(err){
					res.status(500).send(err);
				} else {
					res.json(records);
				}
			});
		})
		.put(function(req, res){
			GetPrimaryProduct.findByIdAndUpdate(req.params.primaryProductId, req.body, function(err, record) {
				if(err){
					res.status(500).send(err);
				} else {
					res.json(record);
				}
			});
		})
		.delete(function(req, res){
			GetPrimaryProduct.findByIdAndRemove(req.params.primaryProductId, function(err, data) {
				if(err){
					res.status(500).send(err);
				} else {
					res.status(204).json({message: "record successfully deleted"});
				}
			});
		});


	return GetPrimaryProductRouter;
};
