const mongoose = require("mongoose");

const admSchema = new mongoose.Schema({
    usename: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
}) 

module.exports = mongoose.model('Adm', admSchema)