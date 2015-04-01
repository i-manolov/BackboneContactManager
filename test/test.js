/*
(function () {
  'use strict';

  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {

      });
    });
  });
})();
*/

'use strict';
var assert = require('chai').expect,
    Contact = require ('../app/js/models/contact.js');

describe('Contact Model', function () {
    beforeEach(function () {
        this.contact = new Contact();
    });
    describe('Initialization', function() {
    	it('default the name to null', function () {
    		this.contact.get('name');
    	});
    	it('default the group to null', function () {
    		
    	});
    	it('default the email to null', function () {
    		
    	});
    	it('default the phone to null', function () {
    		
    	});
    	it('default the address to null', function () {
    		
    	});
    	it('default the photo to img/placeholder.png', function () {
    		
    	});
    });

});

