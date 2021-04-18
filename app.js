const path = require('path')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()


const authRoute = require('./routes/auth')
const userRoute = require('./routes/userRoute')
const viewRoute = require('./routes/viewRoute')
const resultRoute = require('./routes/resultRoute')








// app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())


app.use(express.urlencoded({extended: false}))


app.use(cookieParser())



// if (process.env.NODE_ENV === 'development') {
//     app.use(morgan('dev'))
// }

app.use((req,res,next)=>{
	// console.log(req.cookies)
	next()
})


app.use('/',viewRoute)
app.use('/auth',authRoute)
app.use('/api/v1/user', userRoute)
app.use('/api/v1/result', resultRoute)



module.exports = app