'use strict'

var Backbone = require('backbone');

module.exports = Backbone.Router.extend ({
  routes: {
    '': 'home',
    'contacts': 'showContacts',
    'contacts/new': 'newContact',
    'contacts/edit/:id': 'editContact'
  }
});