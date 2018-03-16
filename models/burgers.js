// Import the MySQL connection object
var orm = require('../config/orm.js');

//* Create the burger object
var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        get(cb);
      });
    },