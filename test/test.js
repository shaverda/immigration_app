var assert = require('assert');
var expect = require('Chai').expect;
var request = require('request');

it('should return 400', function (done) {
  request.get('http://localhost:3000', function (err, res, body){
    expect(res.statusCode).to.equal(200);
    done();
  });
});