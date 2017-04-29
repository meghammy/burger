var orm = require("../config/orm.js");

var burger = {

   read: function(cb){
        orm.read(function(response){
            cb(response);
        });
    },


    create: function(newBurger, cb){
        orm.create(newBurger, function(response){
            cb(response);
        });
    },

    

    update: function(columnVals, condition, cb){
        orm.update(columnVals, condition, function(response){
            cb(response);
        });
    }

};



// var burger = {

//     read: function(cb) {
//         orm.read("burgers", function(res) {
//             cb(res);
//         });
//     },

//     create: function(cols, vals, cb) {
//         orm.create("burgers",cols, vals, function(res) {
//             cb(res);
//         });
//     },



//     update: function(objColVals, condition, cb) {
//         orm.update("burgers", objColVals, condition, function(res) {
//             cb(res);
//         });
//     },
//     delete: function(condition, cb) {
//         orm.delete('burgers', condition, function(res) {
//             cb(res);
//         });
//     }
// };

module.exports = burger;
