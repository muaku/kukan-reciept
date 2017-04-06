'use strict'

const controller = require("./controller/menu.controller")
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

// Allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/receipts")

app.post("/addmenu", controller.addMenu)
app.get("/getallmenus", controller.getAllMenus)

module.exports = app
