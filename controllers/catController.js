var db = require('../models');
var bodyParser = require('body-parser');

//GET /api/cats
function index(req,res){
   db.Cat.find({}, function(err, allCats){
     res.json(allCats);
   });
 }

//GET /api/cats/catId
function show(req, res) {
  db.Cat.findById(req.params.catId, function(err, foundCat) {
    if(err) { console.log('catController.show error', err); }
    console.log('catController.show responding with', foundCat);
    res.json(foundCat);
  });
}

//POST /api/cats/
function create(req,res) {
  var cat = new db.Cat ({
   catName: req.body.catName,
   ownerName: req.body.ownerName,
   age: req.body.age,
   favoriteToys: req.body.favoriteToys.split(','),
   favoriteFood: req.body.favoriteFood.split(',')
 })//req.body
  console.log('body',req.body);

  if (req.body.favoriteToys) {
    var toys = req.body.favoriteToys.split(',').map(function(item) { return item.trim(); } );
    req.body.favoriteToys = toys;
  }

  db.Cat.create(req.body, function(err, cat){
    if (err) {console.log('error', err);}
    console.log(cat);
    res.json(cat);
  });
}

//DELETE  /api/cats/:catId
function destroy(req, res) {
  db.Cat.findOneAndRemove({ _id: req.params.catId }, function(err, foundCat){
    // note you could send just send 204, but we're sending 200 and the deleted entity
    res.json(foundCat);
  });
}

//PUT /api/cats/:catId
//function update(req, res) {
  // console.log('updating with data', req.body);
  // var id = req.params.catId;
  // db.Cat.findOneAndUpdate({_id:id}, req.body, function(err, foundCat) {
  //
  //   //foundCat.catName = req.body.catName;
  //   //foundCat.ownerName = req.body.ownerName;
  //   //foundCat.age = req.body.age;
  //   //foundCat.favoriteToys = req.body.favoriteToys;
  //   //foundCat.favoriteFood = req.body.favoriteFood;
  //   //foundCat.save(function(err, savedCat) {
  //     if(err) { console.log('saving altered cat failed'); }
  //     res.json(savedCat);
  //   });
  // });

module.exports = {
  index:index,
  show:show,
  create:create,
  destroy: destroy
  //update:update
};
