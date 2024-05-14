const specification = require('../models/specification')

//get all specification
const getSpecifications = (req, res) => { 
    try{
        specification.find()
        .then((data) => {res.send(data);})
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching vehicles:', error);
        res.status(500).json({ error: 'Internal Server Error during GET ALL VEHICLES' });
    }
}

//add one specification
const addSpecification = (req, res) => {
    const requiredFields = ['vehicle', 'company', 'model'];
    const missingFields = requiredFields.filter(field => !(field in req.body));
    if(missingFields.length > 0){
        return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
    }
    var spe = new specification()
    spe.vehicle = req.body.vehicle
    spe.company = req.body.company
    spe.model = req.body.model
    spe.datecreated = req.body.datecreated //auto time now
    try{
        spe.save()
        .then((data) => {res.send(data);})
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching specification:', error);
        res.status(500).json({ error: 'Internal Server Error during GET ALL VEHICLES' });
    }
}


module.exports.addSpecification = addSpecification
module.exports.getSpecifications = getSpecifications