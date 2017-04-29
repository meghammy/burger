var express = require('express');
var router = express.Router();

//Import model
var burgers = require('../models/burger.js');

router.get('/', function (req, res) {

    burgers.selectAll(function (data) {
        console.log(data)

        var hbsObject = { 
            burgers: data };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});



router.post('/', function (req, res) {
    console.log("working???")
    burgers.create('burger_name', [req.body.name], function () {
        res.redirect('/');
    });
});


router.put('/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;

    console.log('condition', condition);

    //burgers.update({devoured: req.body.sleepy }, condition, function () {difference?
    burgers.update('devoured',req.body.devoured,condition, function () {

        res.redirect('/');
    });
});

// router.delete('/burgers/delete/:id', function (req, res) {
//     var condition = 'id = ' + req.params.id;   //params = object property

//     burgers.delete(condition, function () {
//         res.redirect('/burgers');
//     });
// });


module.exports = router;
