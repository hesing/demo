var mongoose = require("mongoose"),
	Schema = mongoose.Schema;

var ProjectTaskCreationSchema = new Schema({
	createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
}, { strict: false, versionKey: false });

module.exports = mongoose.model("ProjectTaskCreation", ProjectTaskCreationSchema);