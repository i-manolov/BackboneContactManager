'use strict'

var Backbone = require ('backbone'),
	_ = require ('underscore'),
	Backbone.LocalStorage = require("backbone.localstorage"),
	ContactManager.Models.Contact = require('../../models/contact.js');

ContactManager.Collections.Contacts = Backbone.Collection.extend({
	model: ContactManager.Models.Contact,
	localStorage: new Backbone.LocalStorage.Store('contacts')
});