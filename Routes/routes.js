//import express becoz we are using express framework here
const express = require("express")

//import userController js file
const userController = require("../Controllers/userController")


//create router for express app using Router()
const router = new express.Router()

//define diffrent routes for server application
//register
router.post("/user/register", userController.register)

//login
router.post('/user/login', userController.login)


//export router
module.exports = router