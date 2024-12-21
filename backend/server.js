// import express to start servers
const express = require("express");
// import mongoose to connect to mongodb
const mongoose = require("mongoose");
// import DOTENV
require("dotenv").config();
// import routes
const admRoutes = require('./routes/login')

// create / initiate an app
const app = express();
// use imported route(s)
app.use('/api/adm', admRoutes)

// connect to mongoDb
mongoose
  .connect(process.env.MONGO_CONNECTINGSTRING)
  .then(() => console.log("connected to mongo db"))
  .catch((err) =>
    console.log("an error occurred trying to connect to mongoDb", err)
  );

// set port
const PORT = 5003;
// listen to port
app.listen(PORT, () => console.log("server running on", PORT));
