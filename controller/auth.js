const User = require('../model/userModel')
const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')
const jwt = require('jsonwebtoken')



// const signToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE_IN })
// }

// const createSendToken = (user, statusCode, res) => {
//     const token = signToken(user._id)

//     //setting up cookies
//     const cookieOptions = {
//         expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE_IN * 24 * 60 * 60 * 1000),
//         httpOnly: true
//     }

//     if (process.env.NODE_ENV === 'production') cookieOptions.secure = true

//     res.cookie('jwt', token, cookieOptions)
//         //end of cookies

//     //removing passoword form output when user sign up....
//     user.password = undefined

//     res.status(statusCode).json({
//         status: "success",
//         token,
//         data: {
//             user
//         }
//     })
// }



exports.signup = catchAsync(async(req,res,next)=>{
    const user = await User.create(req.body)
    
    res.status(200).json({
        status:'success',
        data:{
            user
        }
    })
})


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
        data:{
            user
        }

	})
})