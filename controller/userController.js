const User = require('../model/userModel')
const catchAsync = require('../utils/catchAsync')

exports.createUser = catchAsync(async(req,res,next)=>{

    const user =  await User.create(req.body) 

    res.status(200).json({
        status:'success',
        length:user.length,
        data:{
            user
        }
    })

})


exports.getAllUser = catchAsync(async(req,res,next)=>{
    const user = await User.find()

    res.status(200).json({
        status:'success',
        length: user.length,
        data:{
            user
        }
    })
})