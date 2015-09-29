var mongoose = require("mongoose"),
	Schema = mongoose.Schema;

var AuthorSchema = new Schema({

}, { strict: false, versionKey: false });

module.exports = mongoose.model("Author", AuthorSchema);