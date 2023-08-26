const mongoose = require('mongoose')
const uri = "mongodb+srv://satbali:1234@cluster0.rfcfu7n.mongodb.net/"

const mongoDbConnection = async () => {
    try {
        const conn = await mongoose.connect(uri)
        console.log(conn.connection.host, 'connected to db');
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = mongoDbConnection

