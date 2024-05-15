const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Model = mongoose.model;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    cnic: {
        type: String,
        required: true,
        unique: true,
        minlength: 13,
        maxlength: 13
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    type: {//user, admin, dealer
        type : String,
        required: true
    },
    status: {//blocked, active
        type: String,
        default: "active",
        required: true
    },
    dealership:{
        type: Schema.ObjectId,
        default: null,
        required: false
    },
    city:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    }
});

const dealershipSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    registration: {
        type: String,
        required: true,
        unique: true
    },
    facebook: {
        type: String,
        required: false,
    },
    instagram: {
        type: String,
        required: false,
    },
    lat:{
        type: Number,
        required: false
    },
    lng:{
        type: Number,
        required: false
    },
    status:{// verified, unverified
        type: String,
        required: false
    }
});

// const employeeSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true,
//         minlength: 6
//     }
// });

const user = new Model('user', userSchema);
// const employee = new Model('User', employeeSchema);
const dealership = new Model('dealership', dealershipSchema);
module.exports.User = user;
module.exports.Dealership = dealership
//module.exports.Employee = employee