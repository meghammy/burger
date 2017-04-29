//Routing for app and logic for each


var express = require('express');
var router = express.Router();


//Import model burger.js
var burgers = require('../models/burger.js');

//Routes

//GET
router.get('/', function(req, res) {
    burgers.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });

});


//POST
router.post('/', function(req, res) {
    burgers.create([
    	'burger_name'
    	], [
    	req.body.name
    	], function() {
        res.redirect('/');
    });
});

//PUT
router.put('/:id', function(req, res) {
    var condition = 'id =' + req.params.id;
    console.log('condition', condition);

    burgers.update({
    	devoured: req.body.devoured
    }, condition, function() {
        res.redirect('/');
    });
});


//EXPORT
module.exports = router;
