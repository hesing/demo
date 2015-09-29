var mongoose = require("mongoose"),
	Schema = mongoose.Schema;

var ProjectTaskCreationSchema = new Schema({

}, { strict: false, versionKey: false });

module.exports = mongoose.model("ProjectTaskCreation", ProjectTaskCreationSchema);