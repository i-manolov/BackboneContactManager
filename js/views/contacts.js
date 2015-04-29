'use strict'

var Backbone = require('backbone'),
    _ = require('underscore'),
    $ = require('jquery'),
    ContactView = require('./contact.js');

module.exports = Backbone.View.extend({
    template: window['ContactManager']['contacts.tmpl'],

    //el: $('#directory'),

    initialize: function() {
        //this.render();
    },

    renderOne: function(contact) {
        var itemView = new ContactView({
            model: contact
        });

        this.$('#directory').append(itemView.render().$el);
    },

    render: function() {
        var html = this.template();
        this.$el.html(html);
        console.log(html);

        this.collection.each(this.renderOne, this);


        return this;
    }
});
