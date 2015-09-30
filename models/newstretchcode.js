var mongoose = require("mongoose"),
	Schema = mongoose.Schema;

var newstretchcodeSchema = new Schema({
}, { strict: false, versionKey: false });

module.exports = mongoose.model("newstretchcode", newstretchcodeSchema);