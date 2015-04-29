'use strict'

var Contact = require ('./models/contact.js'),
	$ = require('jquery');


window.ContactManager = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	init: function () {
		console.log('Hello World')
	}

}

$(document).ready(function () {
    ContactManager.init();
});



