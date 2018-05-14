const fs = require('fs');
const express = require('express')
const bodyParse = require('body-parser');
const app = express();
app.listen(8010);
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", '3.2.1')
    next();
});
app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json())
app.get('/books', (req, res) => {
    return res.sendFile(__dirname + '/books.json');
})
app.get('/detail', (req, res) => {
    let curId = req.query.id;
    fs.readFile('./books.json', 'utf8', (err, data) => {
        if (err)
            throw err;
        else {
            data = JSON.parse(data);
            let curBook = data.filter(item => item.bookId == curId);
            return res.send(JSON.stringify(curBook[0]));
        }
    })
})
app.get('/manage/getBooks', (req, res) => {
    let type = req.query.type;
    let content = req.query.content;
    fs.readFile('./books.json', 'utf8', (err, data) => {
        if (err)
            throw err;
        else {
            data = JSON.parse(data);
            let books = [];
            if (type == '' || type == 'all') {
                books = data;
            } else {
                books = data.filter(item => item.bookType == type)
            }
            if (content == '') {
                books = books;
            } else {
                books = books.filter(item => item.bookName.indexOf(content) > 0)
            }
            return res.send(JSON.stringify(books))
        }
    })
})
app.get('/manage/delBook', (req, res) => {
    let id = req.query.id;
    fs.readFile('./books.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.send({
                code: 0,
                message: 'error',
                data: ''
            });
        } else {
            data = JSON.parse(data);
            let books = data.filter(book => book.bookId != id);
            fs.writeFile('./books.json', JSON.stringify(books), 'utf8', (err) => {
                if (err) {
                    console.error(err);
                    return res.send({
                        code: 0,
                        message: 'error',
                        data: ''
                    });
                } else {
                    return res.send({
                        code: 1,
                        message: 'success',
                        data: ''
                    });
                }
            })
        }
    })
})
app.get('/manage/getBook', (req, res) => {
    let id = req.query.id;
    fs.readFile('./books.json', 'utf8', (err, data) => {
        if (err)
            throw err;
        else {
            data = JSON.parse(data);
            let book = data.filter(item => item.bookId == id);
            return res.send(JSON.stringify(book[0]));
        }
    })
})
app.post('/manage/setBook',(req,res)=>{
    let book = JSON.parse(req.body.book);
    if(book.bookId){
        fs.readFile('./books.json','utf8',(err,data)=>{
            if(err)
                throw err;
            else{
                data = JSON.parse(data);
                books = data.map(item=>{
                    if(item.bookId==book.bookId){
                        return book
                    }else{
                        return item
                    }
                })
                fs.writeFile('./books.json', JSON.stringify(books), 'utf8', (err) => {
                    if (err) {
                        console.error(err);
                        return res.send({
                            code: 0,
                            message: 'error',
                            data: ''
                        });
                    } else {
                        return res.send({
                            code: 1,
                            message: 'success',
                            data: ''
                        });
                    }
                })
            }
        })
    }else{
        fs.readFile('./books.json','utf8',(err,data)=>{
            if(err)
                throw err;
            else{
                books = JSON.parse(data);
                book.bookId = parseInt(books[books.length-1].bookId)+1;
                books.push(book);
                fs.writeFile('./books.json', JSON.stringify(books), 'utf8', (err) => {
                    if (err) {
                        console.error(err);
                        return res.send({
                            code: 0,
                            message: 'error',
                            data: ''
                        });
                    } else {
                        return res.send({
                            code: 1,
                            message: 'success',
                            data: ''
                        });
                    }
                })
            }
        })
    }
})
app.all('*', function(req, res) {
    return res.send(404, 'Sorry,can not found that');
})
