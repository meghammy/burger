var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var app = express();



app.use(express.static(process.cwd() + '/public'));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'

}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// var PORT = process.env.PORT || 3000;

app.set('port', (process.env.PORT || 8080));
app.listen(app.get('port'), function() {
    console.log('App listening on PORT ' + app.get('port'));
});
