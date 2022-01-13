var mysql = require('mysql');
var db_config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dname'
}
//mysql connection
var db_con = mysql.createConnection(db_config);
db_con.connect();