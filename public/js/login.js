const btn = document.querySelector('.submit')
const signupBoard = document.querySelector('.signup-board')
const loginBoard = document.querySelector('.login-board')




const Login = async( indexNumber, password) => {
    try {
        console.log('sigin..')
        const result = await axios({
            method: "POST",
            url: "http://localhost:5000/api/v1/user/login",
            data: {
                index_number: indexNumber,
                password: password
            }
        })


        if (result.data.status === 'success') {
            window.setTimeout(() => {
                location.assign('/calculator')
            }, 1000)
        }


    } catch (err) {
        console.log(err.response.data)
    }
}


document.querySelector('.login').addEventListener('submit', e => {
    e.preventDefault();

    const indexNumber = document.getElementById('index-number1').value
    const password = document.getElementById('password1').value

    Login( indexNumber, password)


})









const Signup = async(firstName, secondName, indexNumber, password) => {
    try {
        console.log('sigin..')
        const result = await axios({
            method: "POST",
            url: "http://localhost:5000/api/v1/user/signup",
            data: {
                firstName: firstName,
                secondName: secondName,
                index_number: indexNumber,
                password: password
            }
        })


        if (result.data.status === 'success') {
            window.setTimeout(() => {
                location.assign('/calculator')
            }, 1000)
        }


    } catch (err) {
        console.log(err.response.data)
    }
}


document.querySelector('.signup').addEventListener('submit', e => {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value
    const secondName = document.getElementById('secondName').value
    const indexNumber = document.getElementById('index-number').value
    const password = document.getElementById('password').value

    Signup(firstName, secondName, indexNumber, password)


})




document.querySelector('.tabs').addEventListener('click', tabControl);


function tabControl(e) {
    e.preventDefault()
    let elem = e.target,
        elemHref = elem.getAttribute('href')
    elemTab = document.querySelectorAll('.tab')
    tabContent = document.querySelectorAll('.tabs')





    if (elemHref != null && elemHref.indexOf('tab-') != -1) {
        // console.log('good is working here')


        if (elem.className.indexOf('active') == -1) {
            console.log('not active')

            for (let i = 0; i < elemTab.length; i++) {
                elemTab[i].classList.remove('active')
                tabContent[i].classList.remove('board-active')

            }

            elem.classList.add('active')
            console.log(elemHref)
            const item = document.querySelector('#' + elemHref)
            item.classList.add('board-active')
        }
    }
}