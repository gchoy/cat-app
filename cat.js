var db = require("./models");

var catList =[];

catList.push({
  catName: 'Billy The Kid',
  ownerName: 'Billy',
  age: 5,
  favoriteFood: ['kibbles','tuna'],
  favoriteToys: ['yarn','scratch post']

            });
catList.push({
  catName: 'Chairman Meow',
  ownerName: 'Laura',
  age: 7,
  favoriteFood: ['kibbles'],
  favoriteToys: ['toy mouse']

            });
catList.push({
  catName: 'Lady Meow Meow',
  ownerName: 'Martha',
  age: 3,
  favoriteFood: ['tuna'],
  favoriteToys: ['ball']

            });
catList.push({
  catName: 'Mr Meowgi',
  ownerName: 'Paula',
  age: 8,
  favoriteFood: ['fancy kibble'],
  favoriteToys: ['toy mouse']

            });

db.Cat.remove({}, function(err, cats){

  db.Cat.create(catList, function(err, cats){
    if (err) { return console.log('ERROR', err); }
        console.log("all cats:", cats);
        console.log("created", cats.length, "cats");
        process.exit();
    });

});
