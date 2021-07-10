const util=require('../utils/utils')
const bookService = require('../services/bookService')

//function getBooks
const getBooks = async (res) =>{
    try{
        const books = await bookService.getBooks()
        util.resmsg(res, 'success', 200, '', books)
    }
    catch(err){
        util.resmsg(res, 'failed', 500, err,'')
    }
}

const getBook = async (res, id) =>{
    try{
        const books = await bookService.getBook(id)
        util.resmsg(res, 'success', 200, '', books)
    }
    catch(err){
        util.resmsg(res, 'failed', 500, err,'')
    }
}

const deleteBook = async (res, id) =>{
    try{
        const books = await bookService.deleteBook(id)
        util.resmsg(res, 'success', 200, '', books)
    }
    catch(err){
        util.resmsg(res, 'failed', 500, err,'')
    }
}

const updateBook = async (res, id, bookData) => {
    try{
        const books = await bookService.updateBook(id, bookData)
        util.resmsg(res, 'success', 200, '', books)
    }
    catch(err){
        util.resmsg(res, 'failed', 500, err,'')
    }
}

// ********************************exports function
module.exports.getBooks = getBooks
module.exports.getBook = getBook
module.exports.deleteBook = deleteBook
module.exports.updateBook = updateBook
