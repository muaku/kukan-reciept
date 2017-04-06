'use strict'

const app = require("./app")
var port = Number(process.env.PORT || 3000)

var server = app.listen(port, function(){
	var address = server.address()
	console.log("Server listening on port: " + address.port)
})