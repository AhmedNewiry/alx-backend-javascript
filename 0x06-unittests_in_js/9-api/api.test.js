const request = require('request');
const { expect } = require('chai');
const app = require('./api');

let server;

describe('API integration tests', () => {
  const API_URL = 'http://localhost:7865';

  before((done) => {
    server = app.listen(7865, () => {
      done();
    });
  });

  after((done) => {
    server.close(() => {
      done();
    });
  });

  describe('Index page', () => {
    it('GET / returns correct response', (done) => {
      request.get(`${API_URL}/`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('Cart page', () => {
    it('GET /cart/:id returns correct response when id is a number', (done) => {
      request.get(`${API_URL}/cart/12`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Payment methods for cart 12');
        done();
      });
    });

    it('GET /cart/:id returns 404 when id is NOT a number', (done) => {
      request.get(`${API_URL}/cart/hello`, (_err, res) => {
        expect(res.statusCode).to.be.equal(404);
        done();
      });
    });
  });
});
