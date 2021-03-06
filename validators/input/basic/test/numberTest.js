var number = require('../number');
var stub   = require('./stub/number');
var chai   = require('chai');
var should = chai.should();

describe('Number',function(){
	it('should pass a valid json',function(){
		number({},{},stub.json.input,[]).should.deep.equal(stub.json.output);
	})

	it('should return error object for json without "Title" key.',function(){
		number({},{},stub.jsonWithoutTitle.input,[]).should.deep.equal(stub.jsonWithoutTitle.output);
	})

	it('should return error object for json with wrong "default" value.',function(){
		number({},{},stub.jsonWithWrongDefault.input,[]).should.deep.equal(stub.jsonWithWrongDefault.output);
	})

	it('should return error object for json with wrong "enum type".',function(){
		number({},{},stub.jsonWithWrongEnumType.input,[]).should.deep.equal(stub.jsonWithWrongEnumType.output);
	})	

	it('should return error object for json with wrong "enum value".',function(){
		number({},{},stub.jsonWithWrongEnumValue.input,[]).should.deep.equal(stub.jsonWithWrongEnumValue.output);
	})
})