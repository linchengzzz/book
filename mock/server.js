const fs = require('fs');
const express = require('express')
const app = express();

app.listen(8010);
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/books', (req, res) => {
    return res.sendFile(__dirname + '/books.json');
})
app.get('/detail', (req, res) => {
    let curId = req.query.id;
    fs.readFile('./books.json', 'utf8', (err, data) => {
        if (err) throw err;
        else {
            data = JSON.parse(data);
            let curBook = data.filter(item => item.bookId == curId);
            return res.send(JSON.stringify(curBook[0]));
        }
    })
})
app.get('/manage/getBooks',(req,res)=>{
    let type = req.query.type;
    let content = req.query.content;
    fs.readFile('./books.json','utf8',(err,data)=>{
        if(err) throw err;
        else{
            data = JSON.parse(data);
            let books = [];
            if(type==''||type=='all'){
                books = data;
            }else{
                books = data.filter(item=>item.bookType==type)
            }
            if(content==''){
                books = books;
            }else{
                books = books.filter(item=>item.bookName.indexOf(content)>0)
            }
            return res.send(JSON.stringify(books))
        }
    })
})
app.all('*', function (req, res) {
    return res.send(404, 'Sorry,can not found that');
})
