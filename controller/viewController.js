const Result = require('../model/resultModel')

exports.Login = async (req,res,next)=>{
    res.status(200).render('index',{
        title: 'GPA calculator'
    })
}

exports.Calculator = async (req,res,next)=>{
	// const user = await Tour.findOne({ slug: req.params.slug })
    res.status(200).render('calculator',{
        title: 'GPA calculator'
        // user
    })
}

exports.Cgpa = async (req,res,next)=>{
	// const user = await Tour.findOne({ slug: req.params.slug })
	const candidate = res.locals.user._id

	const result = await Result.find({user: candidate})
	console.log(result)
	const user = res.locals.user
	// console.log(res)
    res.status(200).render('cgpa',{
        title: 'GPA calculator',
        user, 
        result
        
        
    })
}