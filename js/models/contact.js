'use strict'

var	Backbone = require('backbone');
var _ = require ('underscore');

module.exports = Backbone.Model.extend({
  defaults: {
    name: null,
    tel: null,
    email: null,
    avatar: null
  },

  initialize: function () {
  	this.set('avatar', _.random(1, 20) + '.jpg');
  }
});
