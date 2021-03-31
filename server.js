const mongoose = require('mongoose')
const dotenv = require('dotenv')

process.on('unhandledException', (err)=>{
	console.log('UNHANDLED EXCEPTION. Server is shutting down.....')
	console.log(err.name, err.message)
	process.exit(1)
})



dotenv.config({path:'./.env'})
const app = require('./app')


const DB = "mongodb+srv://dave:cainandabel4o@cluster0.yeihc.mongodb.net/gpa?retryWrites=true&w=majority"
mongoose.connect(DB, {
	useNewUrlParser:true,	
	useFindAndModify:false,
	useCreateIndex:true,
	useUnifiedTopology:true

}).then((con)=>{
	console.log('Database connected')
})



const PORT = process.env.PORT || 5000


app.listen(PORT,()=>{
	console.log(`Server running on ${PORT}`)
})



 
process.on('uncaughtRejection', (err)=>{
	console.log('UNCAUGHT REJECTION.  Server is shutting down.....')
	console.log(err.name, err.message)

	server.close(()=>{
		process.exit(1)
	})
})