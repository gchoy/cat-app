var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CatSchema = new Schema({
  catName: String,
  ownerName: String,
  age: Number,
  favoriteFood: [String],
  favoriteToys: [String]

});

var Cat = mongoose.model('Cat', CatSchema);

module.exports = Cat;
