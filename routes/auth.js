const express = require('express')
const userController = require('../controller/userController')
const auth = require('../controller/auth')

const router = express.Router()

router.post('/signup',auth.signup )
router.post('/login', auth.login)





module.exports = router   
