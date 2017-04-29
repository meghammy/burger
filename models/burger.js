//Import ORM
var orm = require('../config/orm.js');

var burgerModel = {
	//ALL
	all: function(cb) {
		orm.all("burgers", function(res) {
			cb(res);
		});
	},

	//CREATE
	//column and value
	create: function(column, value, cb) {
		orm.create("burgers", column, value, function(res) {
			cb(res);
			console.log("Create ORM Working");
		});
	},

	//UPDATE
	update:function(objColVals, condition, cb) {
		orm.update('burgers', objColVals, condition, function(res) {
			cb(res);
			console.log("Update ORM Working");
		});
	},
	//DELETE
	delete: function(condition, cb) {
		orm.delete('burgers', condition, function(res) {
			cb(res);
			console.log("Delete ORM Working")
		});
	}
};

//Export db
module.exports = burgerModel;