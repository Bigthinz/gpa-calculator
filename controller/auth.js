const User = require('../model/userModel')

exports.signup = async(req,res,next)=>{
    const user = await User.create(req.body)
    
    res.status(200).json({
        status:'success',
        data:{
            user
        }
    })
}