const express = require('express')
const viewController = require('../controller/viewController')


const router = express.Router()

router.get('/',viewController.Login)


module.exports = router