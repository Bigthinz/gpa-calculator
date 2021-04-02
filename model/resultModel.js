const mongoose = require('mongoose')
const User = require('./userModel')


const resultSchema = new mongoose.Schema({
	year:{
		type:String,
		required: [true, 'Please provide a year'],
		enum:{
			values: ["one", "two", "three", "four"],
			message:  "Result must belong to a year"
		}
	},
	semister:{
		type: String,
		required:[true,"provide a semister"],
		enum:{
			values: ["one", "two"],
			message: "Result must belong to a semisterqg"
		}
	},
	course:{
		type:[String],
		required: [true, 'Please provide a course']
	},
	score:{
		type:[Number],
		require:[true, 'Please provide a score for the course']
	},
	credit:{
		type:[Number],
		require:[true, 'Please provide a credit for the course']
	},
	courseType:{
		type:[String],
		default: "regular",
		enum:{
			values:["regular","elective"],
			message:"course-type must be: regular or elective "
		}
	},
	grade:{
		type:[String]
	},
	gradePoint:{
		type:[Number]

	},
	user:{
		type:mongoose.Schema.ObjectId,
		ref: 'User',
		required:[true, 'Result must belong to a user']
	}

},
{
	toJSON:{virtuals:true},
	toObject:{virtuals:true}
})


const Result = mongoose.model('Result', resultSchema)

module.exports = Result;