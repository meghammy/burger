var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }

    return arr.toString();
}



var orm = {
    read: function(cb) {
        var queryString = "SELECT * FROM burgers";
        // var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                console.log(err);
            }

            cb(result);
        });
    },

    create: function(newBurger, cb) {
        var queryString = "INSERT INTO burgers set ?";

        // create: function(table, cols, vals, cb) {
        //     var queryString = "INSERT INTO " + table;
        //     queryString += " (";
        //     queryString += cols.toString();
        //     queryString += ") ";
        //     queryString += "VALUES (";
        //     queryString += printQuestionMarks(vals.length);
        //     queryString += ") ";

        connection.query(queryString, { burger_name: newBurger }, function(err, response) { /*values, function(err, result) {*/
            if (err) {
                console.log(err);
            };

            cb(response);
        });
    },


    update: function(columnVals, condition, cb) {
        var queryString = "UPDATE burgers SET devoured = ? WHERE ?";
        // update: function(table, cobjColVals, condition, cb) {
        //     var queryString = "UPDATE " + table;
        //     queryString += " SET ";
        //     queryString += objToSql(objColVals);
        //     queryString += " WHERE ";
        //     queryString += condition;
        // var queryString = "UPDATE burgers SET devoured = ? WHERE ?";
        // connection.query(queryString, function(err, result) {
        connection.query(queryString, columnVals, condition, function(err, response) {
            if (err) {
                console.log(err);
            }
            console.log(queryString);
            cb(response);
        });

    },
    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM burgers ?";
        // queryString += " WHERE ";
        // queryString += condition;

        connection.query(queryString, function(err, response) {
            if (err) {
                throw err;
            }

            cb(response);
        });
    }
};

module.exports = orm;
