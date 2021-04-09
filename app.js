const path = require('path')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const authRoute = require('./routes/auth')
const userRoute = require('./routes/userRoute')
const viewRoute = require('./routes/viewRoute')
const resultRoute = require('./routes/resultRoute')


const app = express()

app.use(express.json())


app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))







// app.use(bodyParser.json())



app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.use('/',viewRoute)
app.use('/auth',authRoute)
app.use('/api/v1/user', userRoute)
app.use('/api/v1/result', resultRoute)



module.exports = app