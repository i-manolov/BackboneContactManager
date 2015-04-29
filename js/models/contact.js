'use strict'

var	Backbone = require('backbone');
var _ = require ('underscore');

module.exports = Backbone.Model.extend({
  defaults: {
    name: null,
    phone: null,
    address:null,
    email: null,
    photo: null
  },

  initialize: function () {
  	this.set('photo', _.random(1, 30) + '.jpg');
  }
});
