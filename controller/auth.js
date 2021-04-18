const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { promisify } = require('util')


const User = require('../model/userModel')
const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')




const signToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE_IN })
}

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id)

    //setting up cookies
    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE_IN * 24 * 60 * 60 * 1000),
        httpOnly: true
    }

    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true

    res.cookie('jwt', token, cookieOptions)
        //end of cookies

    //removing passoword form output when user sign up....
    user.password = undefined

    console.log(user)

    res.status(statusCode).json({
        status: "success",
        token,
        data: {
            user
        }
    })
}



exports.signup = catchAsync(async(req,res,next)=>{
    const newUser = await User.create(req.body)
    
    // res.status(200).json({
    //     status:'success',
    //     data:{
    //         newUser
    //     }
    // })

    createSendToken(newUser, 201, res)
})


exports.login = catchAsync(async(req,res,next)=>{
	const {index_number, password} = req.body
    console.log(req.body)

	if(!index_number || !password){
		 return next(new AppError('please provide index_number and password', 400))
	}

	const user = await User.findOne({ index_number})

	if(!user || !(await user.correctPassword(password, user.password))){
		return next(new AppError('Invalid index_number or password'))
	}


	// res.status(200).json({
	// 	status:"success",
 //        data:{
 //            user
 //        }

	// })

    createSendToken(user, 200, res)
})




exports.protect = catchAsync(async(req, res, next) => {
    // 1) GETTING TOKEN AND CHECK IF ITS AVAILABLE
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1]
    } 
    else if (req.cookies.jwt) {
        token = req.cookies.jwt
    }
    console.log(token)

    if (!token) {
        return next(new AppError('You are not logged in! Please log in to get access', 401))
    }

    // 2) Verification of TOKEN
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
    console.log(decoded)

    // 3) check if USER still exit
    const currentUser = await User.findById(decoded.id)


    if (!currentUser) {
        return next(new AppError('The user belonging to this token does not exit', 401))
    }


    // 4) check if user changed password after token was issued
    // if (currentUser.changedPasswordAfter(decoded.iat)) {
    //     return next(new AppError('User reciently changed password. Please login again', 401))
    // }

    req.user = currentUser

    //GRANT ACCESS TO PROTECTIVE ROUTE
    next()
})




exports.setTourUserIds = (req,res,next)=>{
    //ALLOW NESTED ROUTES
    // if(!req.body.tour){
    //     //SETTING tourId in params into the body
    //     req.body.tour = req.params.tourId
    // }



    if(!req.body.user){
        req.body.user = req.user.id
    }

    next()
}



exports.isLoggedIn = async(req,res,next)=>{
    console.log(req.cookies)
 
    if(req.cookies.jwt){
        try{
    const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET)
    console.log(decoded)

    const currentUser = await User.findById(decoded.id)

    if(!currentUser){
        return next()
    }


    res.locals.user = currentUser

    return next()

    }catch(err){
        return next()
    }
}
    next()

}