var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');

var PORT = process.env.PORT || 3000;

var app = express();



app.use(express.static(process.cwd() + '/public'));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride('_method'));

//Handlebars
app.engine('handlebars', exphbs({
    defaultLayout: 'main'

}));

app.set('view engine', 'handlebars');

//Import Routes
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);


app.listen(PORT);
