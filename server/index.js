const fs = require('fs');
const express = require('express');
const bodyParse = require('body-parser');
const app = express();
const connection = require('./mysql').connection;
app.listen(8010, () => {
    console.log('server start:8010');
});
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('X-Powered-By', '3.2.1');
    next();
});
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.get('/books', (req, res) => {
    connection.query('SELECT * FROM books', (err, result) => {
        return res.send(result);
    });
});
app.get('/detail', (req, res) => {
    let curId = req.query.id;
    connection.query('SELECT * FROM books WHERE bookId = ?', [curId], (err, result) => {
        return res.send(result[0]);
    });
});
app.get('/manage/getBooks', (req, res) => {
    let type = req.query.type;
    let content = req.query.content;
    if (type == '' || type == 'all') {
        type = '%';
    }
    content = '%' + content + '%';
    connection.query(
        'SELECT * FROM books WHERE bookType LIKE ? AND bookName LIKE ?',
        [type, content],
        (err, result) => {
            return res.send(result);
        },
    );
});
app.get('/manage/delBook', (req, res) => {
    let id = req.query.id;
    connection.query('DELETE FROM books WHERE bookId = ?', [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.send({
                code: 0,
                message: 'error',
                data: '',
            });
        } else {
            return res.send({
                code: 1,
                message: 'success',
                data: '',
            });
        }
    });
});
app.get('/manage/getBook', (req, res) => {
    let id = req.query.id;
    connection.query('SELECT * FROM books WHERE bookId = ?', [id], (err, result) => {
        if (err) throw err;
        else {
            return res.send(result[0]);
        }
    });
});
app.post('/manage/setBook', (req, res) => {
    let book = JSON.parse(req.body.book);
    let reg = new RegExp(/^\d\d\d\d-\d\d-\d\d/);
    let newDate = reg.exec(book.bookDate)[0];
    if (book.bookId) {
        connection.query(
            'UPDATE books SET bookCover = ?,bookName = ?,bookInfo = ?,bookAuthor = ?,bookPrice = ?,bookSearch = ?,bookSale = ?,bookSold = ?,bookType = ?,bookDate = ?,bookContent = ? WHERE bookId = ?',
            [
                book.bookCover,
                book.bookName,
                book.bookInfo,
                book.bookAuthor,
                parseFloat(book.bookPrice),
                parseFloat(book.bookSearch),
                parseFloat(book.bookSale),
                parseFloat(book.bookSold),
                book.bookType,
                newDate,
                book.bookContent,
                book.bookId,
            ],
            (err, result) => {
                if (err) {
                    console.error(err);
                    return res.send({
                        code: 0,
                        message: 'error',
                        data: '',
                    });
                } else {
                    return res.send({
                        code: 1,
                        message: 'success',
                        data: '',
                    });
                }
            },
        );
    } else {
        connection.query(
            'INSERT INTO books (bookCover,bookName,bookInfo,bookAuthor,bookPrice,bookSearch,bookSale,bookSold,bookType,bookDate,bookContent) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
            [
                book.bookCover,
                book.bookName,
                book.bookInfo,
                book.bookAuthor,
                parseFloat(book.bookPrice),
                parseFloat(book.bookSearch),
                parseFloat(book.bookSale),
                parseFloat(book.bookSold),
                book.bookType,
                newDate,
                book.bookContent,
            ],
            (err, result) => {
                if (err) {
                    console.error(err);
                    return res.send({
                        code: 0,
                        message: 'error',
                        data: '',
                    });
                } else {
                    return res.send({
                        code: 1,
                        message: 'success',
                        data: '',
                    });
                }
            },
        );
    }
});
app.all('*', function(req, res) {
    return res.send(404, 'Sorry,can not found that');
});
