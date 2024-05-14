const vehicle = require('../models/vehicle')

//get all vehicles
const getVehicles = (req, res) => { 
    try{
        vehicle.find()
        .then((data) => {res.send(data);})
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching vehicles:', error);
        res.status(500).json({ error: 'Internal Server Error during GET ALL VEHICLES' });
    }
}

//get one vehicle
const getVehicle = (req, res) => { 
    try{
        vehicle.findById(req.params.id)
        .then((data) => {res.send(data);})
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching vehicle:', error);
        res.status(500).json({ error: 'Internal Server Error during GET ALL VEHICLES' });
    }
}

//add one vehicle
const addVehicles = (req, res) => {
    const requiredFields = ['testdrive', 'status', 'datesold', 'buyprice', 'sellprice', 'vehicle', 'company', 'model'];
    const missingFields = requiredFields.filter(field => !(field in req.body));
    if(missingFields.length > 0){
        return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
    }
    var veh = new vehicle()
    veh.testdrive = req.body.testdrive
    veh.status = req.body.status
    veh.datesold = req.body.datesold
    veh.buyprice = req.body.buyprice
    veh.sellprice = req.body.sellprice
    veh.datecreated = req.body.datecreated //auto time now
    try{
        veh.save()
        .then((data) => {res.send(data);})
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching vehicle:', error);
        res.status(500).json({ error: 'Internal Server Error during GET ALL VEHICLES' });
    }
}

//update one vehicle
const updateVehicles = (req, res) => {
    try{
        vehicle.findByIdAndUpdate(
            req.params.id,{
            $set: {
                testdrive: req.body.testdrive,
                sellprice: req.body.sellprice,
                status: req.body.status,                
                datesold: req.body.datesold,
                buyprice: req.body.buyprice
            }
        },{
            upsert: false
        })
        .then((data) => {res.send(data);})      
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching vehicle:', error);
        res.status(500).json({ error: 'Internal Server Error during GET ALL VEHICLES' });
    }
}

//delete one vehicle
const deleteVehicles = (req, res) => {
    try{
        vehicle.findByIdAndDelete(req.params.id)
        .then((data) => {res.send(data);})
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching vehicle:', error);
        res.status(500).json({ error: 'Internal Server Error during GET ALL VEHICLES' });
    }
}

module.exports.getVehicle = getVehicle
module.exports.getVehicles = getVehicles
module.exports.updateVehicles = updateVehicles
module.exports.addVehicles = addVehicles
module.exports.deleteVehicles = deleteVehicles



