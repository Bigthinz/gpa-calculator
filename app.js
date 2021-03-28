const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()



app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view-engine', 'handlebars')






module.exports = app