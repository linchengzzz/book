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
app.get('/detail', (req, res, next) => {
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
app.all('*', function (req, res) {
    res.send(404, 'Sorry,can not found that');
})
// http.createServer((request, response) => {
//     response.setHeader("Access-Control-Allow-Origin", "*");
//     response.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//     response.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     response.setHeader("X-Powered-By", ' 3.2.1')
//     if (request.method === 'OPTIONS') return response.end();
//     let {
//         pathname,
//         query
//     } = url.parse(request.url);
//     if (pathname === '/books') {
//         fs.readFile('./books.json', 'utf8', (err, data) => {
//             if (err) throw err;
//             else {
//                 response.setHeader('Content-Type', 'application/json;charset=utf-8');
//                 return response.end(data);
//             }
//         })
//     }
// }).listen(8010);
