const mysql = require('mysql');
const fs  = require('fs');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'0103',
    database:'BooksSystem'
})
//连接数据库
connection.connect();
exports.connection = connection;