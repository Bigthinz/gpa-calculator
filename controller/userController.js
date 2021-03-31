const User = require('../model/userModel')

exports.createUser = async(req,res,next)=>{

    const user =  await User.create(req.body) 

    res.status(200).json({
        status:'success',
        length:user.length,
        data:{
            user
        }
    })

}


exports.getAllUser = async(req,res,next)=>{
    const user = await user.find()

    res.status(200).json({
        status:'success',
        length: user.length,
        data:{
            user
        }
    })
}