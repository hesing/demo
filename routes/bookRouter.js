var express = require("express");
var	Book = require("../models/book.js");
var bookRouter = express.Router();

module.exports = function(){
	bookRouter.route("/")
		.get(function(req, res){
			console.log(req.query);
			Book.find(req.query, function(err, books){
				if(err){
					res.status(500).send(err);
				} else {
					res.json(books);
				}
			});
		})
		.post(function(req, res){
			var book = new Book(req.body);

			book.save(function(err, book){
				if(err){
					res.status(500).send(err);
				} else {
					res.status(201).json(book);
				}
			});
		});

	bookRouter.route("/:bookId")
		.get(function(req, res){

			Book.findById(req.params.bookId, function(err, books){
				if(err){
					res.status(500).send(err);
				} else {
					res.json(books);
				}
			});
		})
		.put(function(req, res){
			Book.findByIdAndUpdate(req.params.bookId, req.body, function(err, book) {
				if(err){
					res.status(500).send(err);
				} else {
					res.json(book);
				}
			});
		})
		.delete(function(req, res){
			Book.findByIdAndRemove(req.params.bookId, function(err, data) {
				if(err){
					res.status(500).send(err);
				} else {
					res.status(204).json({message: "Book successfully deleted"});
				}
			});
		});


	return bookRouter;
};
