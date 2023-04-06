const mongoose = require('mongoose');
const Schema = mongoose.Schema

const BlogSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Content: {
        type: String,
    },
    created: {
        type: Date,
        default: Date.now
    },
    imagePath: {
        type: String,
    },
}, {
    versionKey: false
})

const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;