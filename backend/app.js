
// this is the main file for backend 


const express = require('express')
const app = express()
const dotenv = require('dotenv')
const path = require('path')
const cors = require('cors')
// database connection 

const connectDatabase = require('./config/connectDatabase')

// end of the database 


dotenv.config({path:path.join(__dirname,'config','config.env')})


// import products 
const products = require('./routes/product')
// import orders 
const orders = require('./routes/order')


// call the database connection 

connectDatabase()

app.use(express.json())
app.use(cors())

// this is the path 
app.use('/api/v1/',products)
app.use('/api/v1/',orders)

app.listen(process.env.PORT,()=>{
    console.log(`server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`)
})