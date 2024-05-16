const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const Model = mongoose.model;

const AdSchema = new Schema({
    vehicle: {
        type: Schema.ObjectId,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    datecreated: {
        type: Date,
        required: true
    },
})

const ad = new Model('ad', AdSchema);
module.exports = ad