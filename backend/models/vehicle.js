const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const Model = mongoose.model;

const VehicleSchema = new Schema({
    dealership:{
        type: Schema.ObjectId,
        required: true,
    },
    testdrive: {
        type: Boolean,
        required: true
    },
    status: { //sold, unsold
        type: String,
        required: true
    },
    buyprice: {
        type: Number,
        required: true
    },
    sellprice: {
        type: Number,
        default: null
    },
    datesold: {
        type: Date,
        default: null
    },
    datecreated: {
        type: Date,
        required: true
    },
    type: { //bike, car
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    varient: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    power: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    mileage: {
        type: Number,
        required: true
    },
    transmission: {
        type: String,
        required: true
    },
});

const vehicle = new Model('Vehicle', VehicleSchema)
module.exports = vehicle