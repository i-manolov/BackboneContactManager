'use strict'

var Backbone = require ('backbone'),
    Contact = require('./models/contact.js'),
    ContactForm = require('./views/contactform.js'),
    ContactsView = require ('./views/contacts.js'),
    ContactsCollection = require ('./collections/contacts.js'),
    Router = require ('./router/router.js'),
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
        var router = new Router();

        router.on('route:home', function() {
          router.navigate('contacts', {
            trigger: true,
            replace: true
          });
        });

        router.on('route:showContacts', function() {
            var contactsView = new ContactsView({collection: contactsCollection});

            $('#main-container').html(contactsView.render().$el);
        });

        router.on('route:newContact', function (){
            var newContactForm = new ContactForm({
                model: new Contact()
            });

            newContactForm.on('form:submitted', function(contact) {
              contactsCollection.add(contact);
              router.navigate('contacts', {trigger:true});
            });

            $('#main-container').html(newContactForm.render().$el);

        });

        Backbone.history.start({});
	}

}

$(document).ready(function () {
    ContactManager.init();
});



