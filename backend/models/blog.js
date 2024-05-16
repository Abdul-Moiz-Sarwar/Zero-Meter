const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const Model = mongoose.model;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    writer: {
        type: Schema.ObjectId,
        required: true
    },
    datecreated: {
        type: Date,
        required: true
    },
})

const blog = new Model('blog', blogSchema);
module.exports = blog