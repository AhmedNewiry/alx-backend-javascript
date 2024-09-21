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

describe('Cart page', () => {
  const cartUrl = 'http://localhost:7865/cart/';

  it('should return status 200 for a valid cart ID', (done) => {
    request.get(`${cartUrl}12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status 404 for an invalid cart ID', (done) => {
    request.get(`${cartUrl}hello`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      expect(body).to.equal('Not Found');
      done();
    });
  });
});

describe('Available Payments', () => {
  it('should return the correct payment methods', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      const paymentMethods = JSON.parse(body);
      expect(paymentMethods).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login', () => {
  it('should return the welcome message', (done) => {
    request.post({
      url: 'http://localhost:7865/login',
      json: { userName: 'Betty' }
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
