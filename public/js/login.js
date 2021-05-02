const btn = document.querySelector('.submit')
const sbtn = document.querySelector('.sbtn')
const signupBoard = document.querySelector('.signup-board')
const loginBoard = document.querySelector('.login-board')


const hideAlert= ()=>{
    const el = document.querySelector('.alert')
    if(el) el.parentElement.removeChild(el)
}


const showAlert = (type, message)=>{
hideAlert()
const markup = `<div class="alert alert--${type}">${message}</div>`
document.querySelector('body').insertAdjacentHTML('afterbegin', markup)
window.setTimeout(hideAlert,5000)
}




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
            showAlert('success', 'Logged in successfully')
            window.setTimeout(() => {
                location.assign('/calculator')
            }, 1000)
        }


    } catch (err) {
        showAlert('error', err.response.data.message)
        btn.innerHTML ='Login'
        console.log(err.response.data)

    }
}







document.querySelector('.login').addEventListener('submit', e => {
 
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto;  display: block; shape-rendering: auto;" width="20px" height="20px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<circle cx="50" cy="50" r="32" stroke-width="8" stroke="#ffffff" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
</circle>
</svg>`
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
            showAlert('success', 'Logged in successfully')
            window.setTimeout(() => {
                location.assign('/calculator')
            }, 1000)
        }


    } catch (err) {
        showAlert('error', err.response.data.message)
        console.log(err.response.data)
        sbtn.innerHTML ='Next'
    }
}


document.querySelector('.signup').addEventListener('submit', e => {
    sbtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto;  display: block; shape-rendering: auto;" width="20px" height="20px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <circle cx="50" cy="50" r="32" stroke-width="8" stroke="#ffffff" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
    </circle>
    </svg>`
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