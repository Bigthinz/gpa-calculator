const express = require('express')
const resultController = require('../controller/resultController')
const auth = require('../controller/auth')


const router= express.Router()




router.route('/')
	  .get(resultController.getAllResults)
	  .post(auth.protect, auth.setTourUserIds, resultController.createResult)




module.exports = router