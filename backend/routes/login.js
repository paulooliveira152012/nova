// require expres for routing function access
const express = require('express')
// create a router so that it can be used to define routes and export them all at once (functionality from express)
const router = express.Router()
// import adm model for comparison when loggining in
const adm = require('../models/adm')
// import bycrpt to criptograph password before saving on database
const bycrpt = require('bcrypt')
// require jwt to use cryptographic key while user is loggedin which prevent hackers from forging tokens and impersonate users
const jwt = require('jsonwebtoken')

router.post('/login', async(req, res) => {
    console.log("login route reached")
    res.send('user login route reached')
})

module.exports = router
