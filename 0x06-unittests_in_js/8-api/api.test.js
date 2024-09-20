const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
  const serverUrl = 'http://localhost:7865';

  it('should return status 200', (done) => {
    request.get(serverUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request.get(serverUrl, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
