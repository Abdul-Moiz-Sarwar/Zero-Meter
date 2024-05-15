const express = require('express')
const router = express.Router()
const vehicle = require('../controllers/vehicle')
const account = require('../controllers/accounts')

//get all vehicles
router.get('/', account.verifyToken, vehicle.getVehicles)

//get one vehicle
router.get('/:id', account.verifyToken, vehicle.getVehicle)

//add one vehicle
router.post('/', account.verifyToken, vehicle.addVehicles)

//update one vehicle
router.put('/:id', account.verifyToken, vehicle.updateVehicles)

//delete one vehicle
router.delete('/:id', account.verifyToken, vehicle.deleteVehicles)

module.exports = router