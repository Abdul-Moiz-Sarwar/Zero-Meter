const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const Model = mongoose.model;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    datecreated: {
        type: Date,
        required: true
    },
})

const blog = new Model('blog', BlogSchema);
module.exports = blog