exports.Login = async (req,res,next)=>{
    res.status(200).render('index',{
        title: 'GPA calculator'
    })
}