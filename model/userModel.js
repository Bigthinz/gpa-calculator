const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
	firstName:{
		type:String,
		required:[true,'Please enter your firstname']
	},
	secondName:{
		type:String, 
		required:[true,'Please enter your secondName']
	},
	index_number:{
		type:String,
		required:[true,'Please provide your index number'],
		unique:true,
		maxlength:10
	},
	password:{
		type:String,
		required:[true, 'Enter a password'],
		minlength:8
	}

})


const Users = mongoose.model('Users', userSchema)

module.exports = User