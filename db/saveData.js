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
//读取数据
let books = fs.readFileSync('./books.json','utf8');
//将数据转化为对象
books = JSON.parse(books);
//向表中存储数据
books.forEach(book=>{
    connection.query('INSERT INTO books(bookCover,bookName,bookInfo,bookAuthor,bookPrice,bookSearch,bookSale,bookSold,bookType,bookDate,bookContent) VALUES (?,?,?,?,?,?,?,?,?,?,?)',[book.bookCover,book.bookName,book.bookInfo,book.bookAuthor,book.bookPrice,book.bookSearch,book.bookSale,book.bookSold,book.bookType,book.bookDate,book.bookContent],(err,result)=>{
        console.log(err);
        console.log(result);
    })
})
