/// Mreference path="../typings/chai/chai.d.ts"/>
/// Mreference path="../typings/mocha/mocha.d.ts"/>

import chai 		= require('chai');
import nums			= require('../LettersOnlyValidator');

var assert = chai.assert;
var expect = chai.expect;

describe('LettersOnlyValidator#isAcceptable', function(){
	it('numbers are not acceptable', function() {
		var v = new nums.LettersOnlyValidator();
		expect( v.isAcceptable( "123" ) ).to.be.equals(false);
	});
})