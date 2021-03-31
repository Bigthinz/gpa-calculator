const { Login } = require("../../controller/viewController");

const btn = document.querySelector('.submit')


const login = async(firstName, secondName, indexNumber, password)=>{
    try{
        console.log('sigin..')
        const result = await axios({
            method: "POST",
            url: "http://localhost:5000/api/v1/user/signup",
            data:{
                firstName: firstName,
                secondName: secondName,
                index_number: indexNumber,
                password: password
            }
        })


    }catch(err){
        console.log(err.response.data)
    }
}


document.querySelector('.signup').addEventListener('submit', e=>{
    e.preventDefault();
    const firstName = document.getElementById('firstName').value
    const secondName = document.getElementById('secondName').value
    const indexNumber = document.getElementById('index-number').value
    const password = document.getElementById('password').value

    Login(firstName, secondName, indexNumber, password)


})