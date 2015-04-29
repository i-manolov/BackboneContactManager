'use strict'

var Backbone = require ('backbone'),
	_ = require ('underscore'),
	Contact = require('../models/contact.js');

module.exports = Backbone.Collection.extend({
	model: Contact,
	//localStorage: new Backbone.LocalStorage.Store('contacts')
});