const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const Model = mongoose.model;

const PaymentSchema = new Schema({
    owner: {
        type: Schema.ObjectId,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    cvc: {
        type: String,
        required: true
    },
    expire: {
        type: String,
        required: true
    },
    datecreated: {
        type: Date,
        required: true
    },
})

const payment = new Model('payment', PaymentSchema);
module.exports = payment