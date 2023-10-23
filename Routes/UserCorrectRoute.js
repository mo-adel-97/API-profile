const express = require('express')
const UserCorrectRouter = express.Router()
const UserCorrectController = require('../Controllers/PostUserCorrectController')

UserCorrectRouter.post("/correcter",(UserCorrectController.CorrectUser))

module.exports = {
    UserCorrectRouter
}
