const express = require('express')
const SpecificRouterUser = express.Router();
const SpecificControllerUser = require('../Controllers/SpecificUserController')

SpecificRouterUser.get('/Specificuser/:id',SpecificControllerUser.SpecificUser)

module.exports = {
    SpecificRouterUser
}