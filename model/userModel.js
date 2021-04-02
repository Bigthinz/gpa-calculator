const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


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


userSchema.pre('save', async function(next){
	if(!this.isModified('password')) return next()

	this.password = await bcrypt.hash(this.password, 12)

	next()
	
})


userSchema.methods.correctPassword = async function(candidatePassword, userPassword){
	return await bcrypt.compare(candidatePassword, userPassword)
}








const User = mongoose.model('User', userSchema)

module.exports = User