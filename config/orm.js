//Import mqsql 
var connection = require("../config/connection.js");

//HELPER
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}


//HELP II

function obgToSql(ob) {
    var arr = [];

    for(var key in ob) {
        if(Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }
    return arr.toString();
}
var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    //CREATE
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";


        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    //UPDATE
    update: function(table, objColVals, condition, cb) {
        var queryString = 'UPDATE ' + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);
        connection.query(queryString, values, function(err) {
            if (err) throw err;

            cb(result);
        });
    },

    //DELETE
    delete: function(table, condition, cb) {
        var queryString = 'DELETE FROM ' + table;
        queryString += "WHERE";
        queryString += condition;

        connection.query(queryString, values, function(err) {
            if (err) throw err;

            cb(result);
        });

    }
};

//EXPORT ORM
module.exports = orm;

