const User = require('../model/userModel')
const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')

exports.signup = async(req,res,next)=>{
    const user = await User.create(req.body)
    
    res.status(200).json({
        status:'success',
        data:{
            user
        }
    })
}


exports.login = catchAsync(async(req,res,next)=>{
	const {index_number, password} = req.body

	if(!index_number || !password){
		 return next(new AppError('please provide index_number and password', 400))
	}

	const user = await User.findOne({ index_number})

	if(!user || !(await user.correctPassword(password, user.password))){
		return next(new AppError('Invalid index_number or password'))
	}


	res.status(200).json({
		status:"success",

	})
})