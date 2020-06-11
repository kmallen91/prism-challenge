const express = require('express')
const dataRouter = require('./dataRouter')
const server = express()

server.use(express.json())
server.use('/data', dataRouter)

server.get('/', (req, res) => {
    res.send("Server Running")
})

module.exports = server