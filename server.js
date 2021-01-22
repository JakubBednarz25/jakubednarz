const express = require('express')
const exphbs = require('express-handlebars')
const dotenv = require('dotenv');


//setting .env file location
dotenv.config({
    path: `${__dirname}/config/cfg.env`
})

//initializing express
const app = express();

//setting view engine for express
app.engine('.hbs',exphbs({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', '.hbs')

//setting public folder
app.use(express.static('public'))

//setting routing folder
app.use('/', require('./routes/index'))

//starting server
app.listen(process.env.PORT, ()=>{
    console.log(`Server started on port: ${process.env.PORT}`)
})

