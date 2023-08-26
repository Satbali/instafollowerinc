
const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({
    UserName: {

        type: String
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)