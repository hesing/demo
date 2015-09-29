var mongoose = require("mongoose"),
	Schema = mongoose.Schema;

var GetPrimaryProductSchema = new Schema({

}, { strict: false, versionKey: false });

module.exports = mongoose.model("GetPrimaryProduct", GetPrimaryProductSchema);