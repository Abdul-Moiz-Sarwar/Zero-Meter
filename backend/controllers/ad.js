const ad = require('../models/ad')
const vehicle=require('../models/vehicle')

//get all ad
const getAds = (req, res) => { 
    try{
        ad.find()
        .then((data) => {res.send(data);})
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching ads:', error);
        res.status(500).json({ error: 'Internal Server Error during GET ALL ADS' });
    }
}

//get one ad
const getAd = async (req, res) => {
    try {
        const AdData = await ad.findOne({ _id: req.params.id});
        if (!AdData) {
            return res.status(404).json({ message: "ad not found" });
        }
        return res.status(200).json(AdData);
    } catch (error) {
        console.error('Error fetching ad:', error);
        return res.status(500).json({ error: 'Internal Server Error during GET AD' });
    }
}

//add one ad
/*const addAd = (req, res) => {
    const requiredFields = ['vehicle', 'price'];
    const missingFields = requiredFields.filter(field => !(field in req.body));
    if(missingFields.length > 0){
        return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
    }
    var veh = new ad()
    veh.vehicle = req.body.vehicle
    veh.price = req.body.price
    veh.datecreated = Date.now()
    try{
        veh.save()
        .then((data) => {res.send(data);})
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching ad:', error);
        res.status(500).json({ error: 'Internal Server Error during Add Ad' });
    }
}*/

const addAd = async (req, res) => {
    const requiredFields = ['vehicleId'];
    const missingFields = requiredFields.filter(field => !(field in req.body));
    if (missingFields.length > 0) {
        return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
    }

    try {
        const vehicleData = await vehicle.findById(req.body.vehicleId);
        if (!vehicleData) {
            return res.status(404).json({ message: "Vehicle not found" });
        }

        const newAd = new ad({
            vehicle: vehicleData._id,
            price: vehicleData.buyprice, // Take price from vehicle's sellprice attribute
            datecreated: new Date(),
        });

        await newAd.save();
        res.status(201).json(newAd);
    } catch (error) {
        console.error('Error creating ad:', error);
        res.status(500).json({ error: 'Internal Server Error during Add Ad' });
    }
};

//update one ad
const updateAd = (req, res) => {
    try{
        ad.findOneAndUpdate(
            {_id:req.params.id, owner:req.id},{
            $set: {
                vehicle: req.body.vehicle,
                price: req.body.price,
            }
        },{
            upsert: false
        })
        .then((data) => {res.send(data);})      
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching ad:', error);
        res.status(500).json({ error: 'Internal Server Error during Update Ad' });
    }
}

//delete one ad
const deleteAd = (req, res) => {
    try{
        ad.findOneAndDelete({_id:req.params.id})
        .then((data) => {res.send(data);})
        .catch((err) => {console.log(err);})
    } catch (error) {
        console.error('Error fetching ad:', error);
        res.status(500).json({ error: 'Internal Server Error during Delete Ad' });
    }
}

module.exports.getAd = getAd
module.exports.getAds = getAds
module.exports.updateAd = updateAd
module.exports.addAd = addAd
module.exports.deleteAd = deleteAd