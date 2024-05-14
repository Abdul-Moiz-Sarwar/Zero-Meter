const express = require('express')
const router = express.Router()
const specification = require('../controllers/specification')

//get all specification
router.get('/',specification.getSpecifications )

//add one specification
router.post('/',specification.addSpecification )


module.exports = router