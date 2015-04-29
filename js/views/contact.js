'use strict'

var Backbone = require('backbone'),
    _ = require('underscore'),
    $ = require('jquery');

module.exports = Backbone.View.extend({
    template: window["ContactManager"]["contact.tmpl"] ,//_.template($('#contactTemplate').html()),

    tagName: 'article',

    className: 'col-lg-3 col-sm-6 col-xs-6 buffer',

    events: {
        'click button.deleteBtn': 'onClickDelete'
    },

    initialize: function() {
        this.listenTo(this.model, 'remove', this.remove);
        this.model.set('groupColor', this.renderContactHeader(this.model.get('group')));
        this.render();
    },

    render: function() {
        var html = this.template(this.model.toJSON());
        this.$el.append(html);
        //return this;
    },

    renderContactHeader: function (group) {
      switch (group){
        case 'family':
          return '#1E23B7';
          break;
      case 'colleague':
          return '#be0010';
          break;
      case 'friend':
        return '#1c9d12';
        break
      }
    },


    onClickDelete: function(e) {
        e.preventDefault();
        var confirmWindow =  confirm ('Please confirm whether to delete contact ' + this.model.get('name'));
        if (confirmWindow === true) {
          this.model.collection.remove(this.model);
        }
    }
});
