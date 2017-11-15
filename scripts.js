var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 1921);

app.use(express.static('assets'));
app.use(express.static('templates'));

app.get('/',function(req,res){
    console.log(__dirname);
  res.sendFile(__dirname + '/homepage.html');
});

app.get('/recipes',function(req,res){
    console.log(__dirname);
  res.sendFile(__dirname + '/recipes.html');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://flip3.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});
