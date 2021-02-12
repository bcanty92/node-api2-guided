const express = require("express")
const homeRouter = require("./home/home-router")
const usersRouter = require("./users/users-router")

const server = express()

server.use(express.json())
server.use(homeRouter)
server.use(usersRouter) // attach the subrouter to our main application

module.exports = server
