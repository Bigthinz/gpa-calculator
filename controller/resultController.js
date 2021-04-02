const Result = require('../model/resultModel')


exports.getAllResults = async(req,res,next)=>{
	const result = await Result.find()
	console.log(result)

	res.status(200).json({
		status:"success",
		data:{
			result
		}
	})


}



exports.createResult = async(req,res,next)=>{
	console.log(req.body)
	const result = await Result.create(req.body)
	res.status(200).json({
		status:'success',
		data:{
			result
		}
	})
}