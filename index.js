const express = require("express")
const helmet = require("helmet");
var morgan = require('morgan')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
app.use(helmet());
//import routes
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/getUsers')
const categoryRoute = require('./routes/categories')
dotenv.config();

//connect to db
mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('connected to database')
    })
//Middlewares
app.use(express.json())
app.use(morgan('tiny'))
//routes middlewares
app.use('/api/user', authRoute)
app.use('/api/allusers', usersRoute)
app.use('/api/categories', categoryRoute)
app.listen(5001)