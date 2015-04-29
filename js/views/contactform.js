'use strict'

var Backbone = require('backbone'),
    _ = require('underscore'),
    $ = require('jquery');

 module.exports = Backbone.View.extend({
  template: window['ContactManager']['contactform.tmpl'],

  el: $("#main-container"),

  events: {
    'submit .contact-form': 'onFormSubmit'
  },

  initialize: function () {
    this.render();
  },

  render: function() {
    var html = this.template(_.extend(this.model.toJSON(), {
      isNew: this.model.isNew()
    }));
    this.$el.html(html);
  },

  onFormSubmit: function(e) {
    e.preventDefault();
    this.trigger('form:submitted', {
      name: this.$('.contact-name-input').val(),
      phone: this.$('.contact-phone-input').val(),
      email: this.$('.contact-email-input').val(),
      group: this.$('.contact-group-input').val(),
      address: this.$('.contact-address-input').val()
    });
  }


});
