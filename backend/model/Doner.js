const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String
    },
    date_time: {
        required: true,
        type: String
        
    },
    blood_group: {
        required: true,
        type: String
    },
    doctor: {
        required: true,
        type: String
    },
    message: {
        required: true,
        type: String
    },
   
})

module.exports = mongoose.model('Doner', dataSchema)