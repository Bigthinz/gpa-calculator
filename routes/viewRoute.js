const express = require('express')
const viewController = require('../controller/viewController')
const { isLoggedIn } = require('../controller/auth')



const router = express.Router()

router.use(isLoggedIn)


router.get('/',viewController.Login)
router.get('/calculator', viewController.Calculator)
router.get('/cgpa', viewController.Cgpa)
router.get('/position', viewController.Position)


module.exports = router