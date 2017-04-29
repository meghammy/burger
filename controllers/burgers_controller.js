var app = require('express');
var router = app.Router();
var burger = require('../models/burger.js');


// Create all routes
router.get("/", function(req, res) {
    burger.read(function(data) {
   
        var hbsObject = {
            // served: served,
            // devoured: devoured
            burger: data
        };
        res.render('index', hbsObject);
    });
});


router.post('/', function(req, res) {
    burger.create(req.body.newBurger, function() {

    //   [] "burger_name", "devoured"
    // ], [req.body.burger_name, req.body.sleepy], function() {
        res.redirect('/');
    });
});


router.put('/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
    burger.update(req.body.devoured, condition, function() {
// {devoured: req.body.devoured
    // }, condition, function() {
        // "id=" + req.params.id, function() {

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
