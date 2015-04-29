'use strict'

var	Backbone = require('backbone');
var _ = require ('underscore');

var globalCounter = 1;

module.exports = Backbone.Model.extend({
  defaults: {
    id:null,
    name: null,
    phone: null,
    address:null,
    email: null,
    group: null,
    photo: null
  },

  initialize: function () {
  	this.set('photo', _.random(1, 30) + '.jpg');
    this.set('id',  globalCounter);
    globalCounter += 1;
  }
});
