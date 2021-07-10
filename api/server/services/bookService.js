function newbooks(id, name, author, price, status, created_at) {
    res.id = id;
    res.name = name;
    res.author = author;
    res.price = price;
    res.status = status;
    res.created_at = created_at
}

let booklist = [
    {
        id: '0001',
        name: 'ff',
        author: 'ss',
        price: '333',
        status: 'instock',
        created_at: '2015-12-01'
    },
    {
        id: '0002',
        name: 'ffs',
        author: 'sss',
        price: '3334',
        status: 'instock',
        created_at: '2015-12-09'
    }
]


const getBooks = async () => {
    try {
        return booklist
    }
    catch (err) {
        throw err
    }
}

const getBook = async (id) => {
    try {
        return booklist.filter((book) => {
            return book.id == id
        })
    }
    catch (err) {
        throw err
    }
}

const deleteBook = async (id) => {
    try {
        booklist = booklist.filter((book) => {
            return book.id != id
        })
        return booklist
    }
    catch (err) {
        throw err
    }
}

//update
const updateBook = async (id, bookData) => {
    try {
        booklist.forEach((element, index) => {
            // หาจากตำแหน่ง จาก ไอดี
            if (element.id === id){
                booklist[index] = bookData 
                // booklist[index].id = id
                booklist[index]['id'] = id
            }
        })
        return booklist
    }
    catch (err) {
        throw err
    }
}

module.exports.getBooks = getBooks
module.exports.getBook = getBook
module.exports.deleteBook = deleteBook
module.exports.updateBook = updateBook
