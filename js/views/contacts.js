'use strict'

var Backbone = require ('backbone'),
	_ = require ('underscore'),
	$ = require('jquery'),
	ContactView= require ('./contact.js');

module.exports = Backbone.View.extend({
  el: $('#directory'),

  initialize: function () {
  	this.render();
  },

  renderOne: function(contact) {
    var itemView = new ContactView({model: contact});
    this.$el.append(itemView.$el);
  },

  render: function() {
  	_.each(this.collection.models, function(item) {
  	    this.renderOne(item);
  	}, this);
  }
});