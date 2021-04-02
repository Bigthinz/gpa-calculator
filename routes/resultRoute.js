const express = require('express')
const resultController = require('../controller/resultController')


const router= express.Router()

router.route('/')
	  .get(resultController.getAllResults)
	  .post(resultController.createResult)




module.exports = router