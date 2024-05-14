const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const Model = mongoose.model;

const VehicleSchema = new Schema({
    testdrive: {
        type: Boolean,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    datesold: {
        type: Date,
        required: true
    },
    buyprice: {
        type: Number,
        required: true
    },
    sellprice: {
        type: Number,
        required: true
    },
    datecreated: {
        type: Date,
        required: true
    }
});

const vehicle = new Model('Vehicle', VehicleSchema)
module.exports = vehicle