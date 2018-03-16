// Import the MySQL connection object
var connection = require('./connection.js');


// =============================================================================
// * Helper function for generating MySQL syntax.
// * Pass 3 values into the mySQL query.
// * In order to write the query, we need 3 question marks.
// * The helper function below loops through and creates an array of question marks - ["?", "?", "?"]
// * -- and turns it into a string.
// * ["?", "?", "?"].toString() => "?,?,?";
// =============================================================================
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) { //<< object key:value pairs to SQL syntax
    var arr = [];
// loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    }
    return arr.toString();
}

// Create the ORM object to perform SQL queries
var orm = {
    //* selectAll is method that will execute the necessary MySQL commands in the controllers. 
    // Function that returns all table entries
    selectAll: function (tableInput, cb) {
        // Construct the query string that returns all rows from the target table
        var queryString = "SELECT * FROM " + tableInput + ";";
        // Perform the database query
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            // Return results in callback
            cb(result);
        });
    },
    //* insertOne is method that will execute the necessary MySQL commands in the controllers. 
    // Function that insert a single table entry
    insertOne: function (table, cols, vals, cb) {
        // Construct the query string that inserts a single row into the target table
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        // console.log(queryString);

        // Perform the database query
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            // Return results in callback
            cb(result);
        });
    },
    //* updateOne is method that will execute the necessary MySQL commands in the controllers.
    // Function that updates a single table entry
    updateOne: function (table, objColVals, condition, cb) {
        // Construct the query string that updates a single entry in the target table
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        // console.log(queryString);

        // Perform the database query
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            // Return results in callback
            cb(result);
        });
    }
};

// Export the orm object for use in other modules
module.exports = orm;