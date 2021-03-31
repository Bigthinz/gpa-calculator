exports.Login = async (req,res,next)=>{
    res.status(200).render('index',{
        title: 'GPA calculator'
    })
}

exports.Calculator = async (req,res,next)=>{
    res.status(200).render('calculator',{
        title: 'GPA calculator'
    })
}