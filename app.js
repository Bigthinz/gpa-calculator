const path = require('path')
const express = require('express')
const morgan = require('morgan')


const app = express()

const authRoute = require('./routes/auth')
const userRoute = require('./routes/userRoute')
const viewRoute = require('./routes/viewRoute')



app.use(morgan('dev'))
app.use(express.json())


app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.use('/',viewRoute)
app.use('/auth',authRoute)
app.use('/api/v1/user', userRoute)



module.exports = app