'use strict'

const Menu = require("../model.js").Menu
const mongoose = require("mongoose")

exports.addMenu = function(req, res){
	var name = req.body.name
	var price = req.body.price

	console.log(req.body)

	var newMenu = new Menu({
		name: name,
		price: price
	})

	newMenu.save(function(err, menu){
		if (err) { return res.status(500).send(err)}
		res.status(200).send(menu)
	})
}

exports.getAllMenus = function(req, res){
	Menu.find({}).exec(function(err, menus){
		if (err) { return res.status(422).send(err)}
		res.status(200).send(menus)
	})
}


