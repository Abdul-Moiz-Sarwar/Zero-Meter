const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const Model = mongoose.model;

const SpecificationSchema = new Schema({
    vehicle : mongoose.Schema.ObjectId,
    company: String,
    car: String,
    datecreated: Date
});

const specification = new Model('Specification', SpecificationSchema)
module.exports = specification