// Author: Guru Kiran

const mongoose = require('mongoose');

const user_details = {
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    event_ids: [String],
    _id: mongoose.Schema.Types.ObjectId
};

module.exports = mongoose.model("user_details", user_details);