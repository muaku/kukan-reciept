'use strict'

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const menuSchema = Schema({
	name: String,
	price: Number
})

const Menu = mongoose.model("Menu", menuSchema, "Menu")

exports.Menu = Menu