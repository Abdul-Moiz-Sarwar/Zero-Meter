const express = require('express')
const router = express.Router()
const vehicle = require('../controllers/vehicle')

//get all vehicles
router.get('/', vehicle.getVehicles)

//get one vehicle
router.get('/:id', vehicle.getVehicle)

//add one vehicle
router.post('/', vehicle.addVehicles)

//update one vehicle
router.put('/:id', vehicle.updateVehicles)

//delete one vehicle
router.delete('/:id', vehicle.deleteVehicles)

module.exports = router