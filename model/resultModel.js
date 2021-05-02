const mongoose = require('mongoose')
const User = require('./userModel')


const resultSchema = new mongoose.Schema({
	year:{
		type:String,
		required: [true, 'Please provide a year'],
		enum:{
			values: ["year-1", "year-2", "year-3", "year-4"],
			message:  "Result must belong to a year"
		}
	},
	semester:{
		type: String,
		required:[true,"provide a semister"],
		enum:{
			values: ["semester-1", "semester-2"],
			message: "Result must belong to a semister"
		}
	},
	// academic_year:{
	// 	type: String,
	// 	unique: true,
	// 	required:[true, 'Please provide academic year']
	// },
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
		type:[Number]
	},
	gradePoint:{
		type:[String]

	},
	gpa:Number,
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



// resultSchema.pre('save', function(next){
// 	this.academic_year = this.year + this.semester 
// 	next()
// })


const Result = mongoose.model('Result', resultSchema)

module.exports = Result;