// setup the code to connect Node to MySQL.
// Export the connection.
var mysql = require("mysql");
// Create the MySQL connection object
var connection;
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
})
/* connection.connect(function(err) {
    if (err) {
      console.error("error connecting to: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  }); */
 
  if (process.env.JAWSDB_URL) {
    // DB is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    // DB is local on localhost
    connection = mysql.createConnection({
      port: 3306,
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'burgers_db'
    }) 
  }; 
  module.exports = connection;