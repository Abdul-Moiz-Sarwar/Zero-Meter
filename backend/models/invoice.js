const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const Model = mongoose.model;

const InvoiceSchema = new Schema({
    payee: {
        type: Schema.ObjectId,
        required: true
    },
    ad:{
        type: Schema.ObjectId,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: { //paid, unpaid
        type: String,
        required: true
    },
    datedue:{
        type: Date,
        required:true
    },
    datepaid:{
        type: Date,
        required:false
    },
    datecreated: {
        type: Date,
        required: true
    },
})

const invoice = new Model('invoice', InvoiceSchema);
module.exports = invoice