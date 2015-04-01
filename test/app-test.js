/*
'use strict'
var expect = require ('chai').expect;

describe("Application", function() {
	it('creates a global variable for the name space ContactManager' , function () {
		expect(cm).to.exist;
	})
});
*/

'use strict';
var assert = require('chai').expect,
    ContactManager.Models.Contact = require ('../app/js/models/contact.js');

describe('Contact Model', function () {
    beforeEach(function () {
        this.contact = new ContactManager.Models.Contact();
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

