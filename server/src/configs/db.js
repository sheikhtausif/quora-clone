const mongoose = require('mongoose')

const connect = async () => {
    await mongoose.connect('mongodb://localhost:27017/quoradb')
    console.log("connection has been established with quoradb")
}

module.exports = connect