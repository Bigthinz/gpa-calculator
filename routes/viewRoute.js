const express = require('express')
const viewController = require('../controller/viewController')


const router = express.Router()

router.get('/',viewController.Login)
router.get('/calculator',viewController.Calculator)


module.exports = router