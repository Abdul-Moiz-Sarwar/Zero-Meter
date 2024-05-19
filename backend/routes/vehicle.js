const express = require('express')
const router = express.Router()
const vehicle = require('../controllers/vehicle')
const account = require('../controllers/accounts')

//get all vehicles of single dealer
router.get('/', account.verifyToken, vehicle.getVehicles)


//get all vehicles regardless of dealer
router.get('/all', account.verifyToken, vehicle.getallVehicles)

//get one vehicle
router.get('/:id', account.verifyToken,  vehicle.getVehicle)

//add one vehicle
router.post('/', account.verifyToken, account.isDealer, vehicle.addVehicle)

//update one vehicle
router.put('/:id', account.verifyToken, account.isDealer, vehicle.updateVehicle)

//delete one vehicle
router.delete('/:id', account.verifyToken, account.isDealer, vehicle.deleteVehicle)

module.exports = router