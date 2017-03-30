var express = require('express');

var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/vendor', express.static(__dirname + '/bower_components'));

var controllers = require('./controllers');

/*
 * JSON API Endpoints
 */
app.get('/api', controllers.api.index);
app.get('/api/cats', controllers.cats.index);
app.get('/api/cats/:catId', controllers.cats.show);
app.post('/api/cats', controllers.cats.create);
app.delete('/api/cats/:catId',controllers.cats.destroy);
//app.put('/api/cats/:catId',controllers.cats.update);

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
