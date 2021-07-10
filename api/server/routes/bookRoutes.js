const express = require('express')
const routes = express.Router()
const bookControllers = require('../controllers/bookControllers')

routes.get('/',async (req, res) =>{
    bookControllers.getBooks(res)
})

routes.get('/:id',async (req, res) =>{
    bookControllers.getBook(res, req.params.id)

})

routes.put('/:id',async (req, res) =>{
    bookControllers.updateBook(res, req.params.id, req.body)
})

routes.delete('/:id',async (req, res) =>{
    bookControllers.deleteBook(res, req.params.id)
})

module.exports = routes