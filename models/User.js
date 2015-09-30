var mongoose = require("mongoose"),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
}, { strict: false, versionKey: false });

// UserSchema.pre('save', function(next) {
//   var currentDate = new Date();

//   this.updated_at = currentDate;

//   if (!this.created_at)
//     this.created_at = currentDate;

//   next();
// });

module.exports = mongoose.model("User", UserSchema);