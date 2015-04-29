'use strict'

var ContactsView = require ('./views/contacts.js'),
    ContactsCollection = require ('./collections/contacts.js')
	$ = require('jquery');


var contacts = [{
    	name: 'Contact 1',
    	address: '1 street, a town, a city, AB12 3CD',
    	phone: '0123456789',
    	email: 'anemail@me.com',
    	group: 'family'
	}, {
    	name: 'Contact 2',
    	address: '1 street, a town, a city, AB12 3CD',
    	phone: '0123456789',
    	email: 'anemail@me.com',
    	group: 'family'
	}, {
    	name: 'Contact 3',
    	address: '1 street, a town, a city, AB12 3CD',
    	phone: '0123456789',
    	email: 'anemail@me.com',
    	group: 'friend'
	}, {
    	name: 'Contact 4',
    	address: '1 street, a town, a city, AB12 3CD',
    	phone: '0123456789',
    	email: 'anemail@me.com',
    	group: 'colleague'
	}, {
    	name: 'Contact 5',
    	address: '1 street, a town, a city, AB12 3CD',
    	phone: '0123456789',
    	email: 'anemail@me.com',
    	group: 'family'
	}, {
    	name: 'Contact 6',
    	address: '1 street, a town, a city, AB12 3CD',
    	phone: '0123456789',
    	email: 'anemail@me.com',
    	group: 'colleague'
	}, {
    	name: 'Contact 7',
    	address: '1 street, a town, a city, AB12 3CD',
    	phone: '0123456789',
    	email: 'anemail@me.com',
    	group: 'friend'
	}, {
    	name: 'Contact 8',
    	address: '1 street, a town, a city, AB12 3CD',
    	phone: '0123456789',
    	email: 'anemail@me.com',
    	group: 'family'
}]

window.ContactManager = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	init: function () {
        var contactsCollection = new ContactsCollection(contacts);
		var view = new ContactsView({collection: contactsCollection});
	}

}

$(document).ready(function () {
    ContactManager.init();
});



