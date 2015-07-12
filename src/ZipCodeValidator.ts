import validation = require('./Validation');
var numberRegex = /^[0-9]+$/;

export class ZipCodeValidator implements validation.StringValidator {
	isAcceptable(s:string) {
		return s.length === 5 && numberRegex.test(s);
	}
}