'use strict'
var expect = require ('chai').expect;

describe("Application", function() {
	it('creates a global variable for the name space ContactManager' , function () {
		expect(cm).to.exist;
	})
});