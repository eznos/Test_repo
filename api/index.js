
const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dayjs = require('dayjs')
const timezone = require('dayjs/plugin/timezone')
const utc  = require('dayjs/plugin/utc')

dayjs.extend(utc)
dayjs.extend(timezone)

const app = express()   
app.use(cors({origin: true}))
app.use(express.json({limit:'1mb'}))
app.use(express.urlencoded({limit: '1mb' , extends: true}))

const books = require('./server/routes/bookRoutes')

//get host put path delete
app.use('/books',books)

app.get('/' , (req, res) =>{
    res.send(`detected server is working now is  ${dayjs().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss')}`)
})
app.listen(process.env.PORT, process.env.HOST,() =>{
    console.log(`api list open on port ${process.env.PORT}`);
})