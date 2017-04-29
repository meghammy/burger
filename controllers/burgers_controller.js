var app = require('express');
var router = app.Router();
var burger = require('../models/burger.js');


// Create all routes
router.get("/", function(req, res) {
    burger.read(function(data) {
   
        var hbsObject = {
          
            burgers: data
        };
        res.render('index', hbsObject);
    });
});


router.post('/', function(req, res) {

    console.log(JSON.stringify(req.body));

    burger.create(req.body.addBurger, function() {


        res.redirect('/');
    });
});


router.put('/:id', function(req, res) {
    console.log(hi)
    console.log(JSON.stringify(req.body));
    var condition = 'id = ' + req.params.id;
    burger.update(req.body.devoured, condition, function() {


        res.redirect('/');
    })
});

router.delete("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function() {
        res.redirect("/");
    });
});


module.exports = router;
