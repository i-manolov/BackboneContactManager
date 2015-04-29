'use strict'

var Backbone = require('backbone'),
    Contact = require('./models/contact.js'),
    ContactForm = require('./views/contactform.js'),
    ContactsView = require('./views/contacts.js'),
    ContactsCollection = require('./collections/contacts.js'),
    Router = require('./router/router.js'),
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
    init: function() {
        var contactsCollection = new ContactsCollection(contacts);
        var router = new Router();

        router.on('route:home', function() {
            router.navigate('contacts', {
                trigger: true,
                replace: true
            });
        });

        router.on('route:showContacts', function() {
            var contactsView = new ContactsView({
                collection: contactsCollection
            });

            $('#main-container').html(contactsView.$el);
        });

        router.on('route:newContact', function() {
            var newContactForm = new ContactForm({
                model: new Contact()
            });

            newContactForm.on('form:submitted', function(contact) {
                contact.id = contactsCollection.isEmpty() ? 1 : (_.max(contactsCollection.pluck('id')) + 1);
                contactsCollection.add(contact);
                router.navigate('contacts', {
                    trigger: true
                });
            });

            $('#main-container').html(newContactForm.$el);
        });
        
        router.on('route:editContact', function(id) {
          var contact = contactsCollection.get(id);
          var editContactForm;

          if (contact) {
            editContactForm = new ContactForm({
                model: contact
            });

            editContactForm.on('form:submitted', function(attrs) {
              contact.set(attrs);
              router.navigate('contacts', true);
            });

            $('#main-container').html(editContactForm.$el);
          } 
          else {
            router.navigate('contacts', true);
          }
        });



        Backbone.history.start({});
    }

}

$(document).ready(function() {
    ContactManager.init();
});
