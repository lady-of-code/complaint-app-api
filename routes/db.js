var mysql = require('mysql');

var sql_connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sakshi1459",
  database : 'complaint-app'

});

sql_connection.connect(function (err) {
    // console.log("error is:" ,err);
    if (err!=null) throw err;
    console.log("this is connected with MySQL database");
  
})
module.exports = sql_connection;
