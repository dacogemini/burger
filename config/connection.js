// setup the code to connect Node to MySQL.
// Export the connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: port,
    user: "root",
    password: "",
    database: ""
})
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  module.exports = connection;