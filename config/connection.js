var mysql = require("mysql");

var connection = mysql.createConnection({
	port:3306,
	host: "localhost",
	user: "root",
	password: "Pepper1!",
	database: "burger_db"
});

//Connecting to MySQL
connection.connect(function(error){
	if(error){
		console.log("error connecting: " + error.stack);
	}else{
		console.log("connected as id " + connection.threadId);
	}
});

//Export our database connection for our ORM queries 
module.exports = connection;


//SET UP MYSQL 
// var mysql = require('mysql');

// //var connection;

// // if(process.env.BURGERTIMEDB_URL)
// // {
// // 	connection = mysql.createConnection(process.env.BURGEERTIMEDB_URL);
// // }
// // else
// // {

// 	var connection = mysql.createConnection({
// 	port: 3306,
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'Pepper1!',
// 	database: 'burger_db'


	// host: 'us-cdbr-iron-east-03.cleardb.net',
	// user: 'ba72ea1eddb439',
	// password: 'b312901b',
	// database: 'heroku_a3df6cb79e781c0'
	//  connectionLimit: 5
//});


//Makes connection
// connection.connect(function(err) {
            //   if (err) {
            //     console.error('error connecting: ' + err.stack);
            //     return;
            //   };

            //   console.log('connected as id ' + connection.threadId);
            // });

            // module.exports = connection;


