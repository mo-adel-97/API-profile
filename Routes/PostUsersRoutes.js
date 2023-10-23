const express = require('express')
const UserPostRouter = express.Router()
const UserPostController = require('../Controllers/PostUsersControllers')

UserPostRouter.post("/users",(UserPostController.PostUsers))

module.exports = {
    UserPostRouter
}
