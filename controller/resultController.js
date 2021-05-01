const Result = require('../model/resultModel')
const catchAsync = require('../utils/catchAsync')


exports.getAllResults = catchAsync(async(req,res,next)=>{
	const result = await Result.find()
	console.log(result)

	res.status(200).json({
		status:"success",
		data:{
			result
		}
	})


})



exports.createResult = catchAsync(async(req,res,next)=>{
	console.log(req.body)

	// if(!req.body.user){
	// 	req.body.user = req.user.id
	// }

	const result = await Result.create(req.body)
	res.status(201).json({
		status:'success',
		data:{
			result
		}
	})
})



exports.setTourUserIds = (req,res,next)=>{
	//ALLOW NESTED ROUTES
	// if(!req.body.tour){
	// 	//SETTING tourId in params into the body
	// 	req.body.tour = req.params.tourId
	// }



	if(!req.body.user){
		req.body.user = req.user.id
	}

	next()
}
