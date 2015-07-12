/// Mreference path="../typings/chai/chai.d.ts"/>

import chai 		= require('chai');

var assert = chai.assert;
var expect = chai.expect;

describe('SanityTest', function(){
	it('should pass', function() {
		expect( 1 + 1 ).to.be.equals(2);
	});
})