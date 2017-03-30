var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/catly_test");

var Cat = require('./cats');

module.exports.Cat = Cat;
