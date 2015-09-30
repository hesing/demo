var express = require("express"),
	app = express(),
	mongoose = require("mongoose"),
	cors = require("cors"),
	bodyParser = require("body-parser"),
	port = process.env.PORT || 3000;

mongoose.connect("mongodb://hesing:123@ds042698.mongolab.com:42698/simplifydb", function(){
	console.log("Connected to simplifydb");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use(express.static("public"));

app.get("/", function(req, res){
	res.send({message: "Welcome Simplify"});
});

var UserRouter = require("./routes/UserRouter")();
app.use("/User", UserRouter);

var GetPrimaryProductRouter = require("./routes/GetPrimaryProductRouter")();
app.use("/GetPrimaryProduct", GetPrimaryProductRouter);

var ProjectTaskCreationRouter = require("./routes/ProjectTaskCreationRouter")();
app.use("/ProjectTaskCreation", ProjectTaskCreationRouter);

var newstretchcodeRouter = require("./routes/newstretchcodeRouter")();
app.use("/newstretchcode", newstretchcodeRouter);

app.listen(port, function(){
	console.log("browse http://localhost:"+ port);
});