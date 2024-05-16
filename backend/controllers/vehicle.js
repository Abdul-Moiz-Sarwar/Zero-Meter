const vehicle = require('../models/vehicle')

//get all vehicles
const getVehicles = (req, res) => { 
    try{
        vehicle.find({dealership:req.id})
        .then((data) => {res.send(data);})
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching vehicles:', error);
        res.status(500).json({ error: 'Internal Server Error during GET ALL VEHICLES' });
    }
}

//get one vehicle
const getVehicle = async (req, res) => {
    try {
        const vehicleData = await vehicle.findOne({ _id: req.params.id, dealership: req.id });
        if (!vehicleData) {
            return res.status(404).json({ message: "Vehicle not found" });
        }
        return res.status(200).json(vehicleData);
    } catch (error) {
        console.error('Error fetching vehicle:', error);
        return res.status(500).json({ error: 'Internal Server Error during GET VEHICLE' });
    }
}

//add one vehicle
const addVehicle = (req, res) => {
    const requiredFields = ['testdrive', 'status', 'datesold', 'buyprice', 'sellprice',
    'type', 'company', 'model', 'varient', 'year','power','color','mileage'];
    const missingFields = requiredFields.filter(field => !(field in req.body));
    if(missingFields.length > 0){
        return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
    }
    var veh = new vehicle()
    veh.dealership = req.id
    veh.testdrive = req.body.testdrive
    veh.status = req.body.status
    veh.datesold = req.body.datesold
    veh.buyprice = req.body.buyprice
    veh.sellprice = req.body.sellprice
    veh.type = req.body.type
    veh.company = req.body.company
    veh.model = req.body.model
    veh.varient = req.body.varient
    veh.year = req.body.year
    veh.power = req.body.power
    veh.color = req.body.color
    veh.mileage = req.body.mileage
    veh.datecreated = Date.now()
    try{
        veh.save()
        .then((data) => {res.send(data);})
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching vehicle:', error);
        res.status(500).json({ error: 'Internal Server Error during Add Vehicle' });
    }
}

//update one vehicle
const updateVehicle = (req, res) => {
    try{
        vehicle.findOneAndUpdate(
            {_id:req.params.id,dealership:req.id},{
            $set: {
                testdrive: req.body.testdrive,
                sellprice: req.body.sellprice,
                status: req.body.status,                
                datesold: req.body.datesold,
                buyprice: req.body.buyprice,
                testdrive: req.body.testdrive,
                status: req.body.status,
                datesold: req.body.datesold,
                buyprice: req.body.buyprice,
                sellprice: req.body.sellprice,
                type: req.body.type,
                company: req.body.company,
                model: req.body.model,
                varient: req.body.varient,
                year: req.body.year,
                power: req.body.power,
                color: req.body.color,
                mileage: req.body.mileage,
            }
        },{
            upsert: false
        })
        .then((data) => {res.send(data);})      
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching vehicle:', error);
        res.status(500).json({ error: 'Internal Server Error during Update Vehicle' });
    }
}

//delete one vehicle
const deleteVehicle = (req, res) => {
    try{
        vehicle.findOneAndDelete({_id:req.params.id,dealership:req.id})
        .then((data) => {res.send(data);})
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching vehicle:', error);
        res.status(500).json({ error: 'Internal Server Error during GET ALL VEHICLES' });
    }
}

module.exports.getVehicle = getVehicle
module.exports.getVehicles = getVehicles
module.exports.updateVehicle = updateVehicle
module.exports.addVehicle = addVehicle
module.exports.deleteVehicle = deleteVehicle



