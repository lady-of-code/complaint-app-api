var mysql = require('mysql');
var db_cred= {
  host: "localhost",
  user: "root",
  password: "sakshi1459",
  database : 'complaint-app'

}
var sql_connection = mysql.createConnection(db_cred);

sql_connection.connect(function (err) {
    // console.log("error is:" ,err);
    if (err!=null) throw err;
    console.log("complaint-app-api is connected with MySQL database:" + db_cred.database);
  
})
module.exports = sql_connection;
