//获取所有图书
exports.SELECT_ALL_BOOKS = 'SELECT * FROM books' 
//获取一本图书
exports.SELECT_ONE_BOOK = 'SELECT * FROM books WHERE bookId=?'
//获取管理员图书
exports.SELECT_MANAGE_ALL_BOOKS = 'SELECT * FROM books WHERE bookType LIKE ? AND bookContent LIKE ?'
