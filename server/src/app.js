// require('dotenv').config()
const PORT = 8000
const connect = require('./configs/db')
const express = require('express')
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())


app.listen(PORT, () => {
    connect()
    console.log(`App listening on port http://localhost:${PORT}`)
})
