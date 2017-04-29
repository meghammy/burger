//SET UP MYSQL 
var mysql = require('mysql');

var connection = mysql.createConnection({
	port: 3000,
	host: 'localhost',
	user: 'root',
	password: 'Pepper1!',
	database: 'burger_db'
});

//Makes connection
connection.connect(function(err) {
	if (err) {
		console.log("error connecting: " + err.stack);
		return;
	}
	console.log("connection as id " + connection.threadId);
});

//Export for ORM
module.exports = connection;