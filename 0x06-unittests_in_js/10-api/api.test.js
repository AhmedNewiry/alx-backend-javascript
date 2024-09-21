const request = require('request');

const serverUrl = 'http://localhost:7865';

describe('Cart Page Endpoints', () => {
  it('should return payment methods for a valid cart ID', (done) => {
    request.get(`${serverUrl}/cart/12`, (error, response, body) => {
      expect(response.statusCode).toEqual(200);
      expect(body).toEqual('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 for an invalid cart ID (non-number)', (done) => {
    request.get(`${serverUrl}/cart/hello`, (error, response, body) => {
      expect(response.statusCode).toEqual(404);
      expect(body).toContain('Invalid cart id. Cart id must be a number.');
      done();
    });
  });
});

describe('Available Payments Endpoint', () => {
  it('should return available payment methods', (done) => {
    request.get(`${serverUrl}/available_payments`, (error, response, body) => {
      expect(response.statusCode).toEqual(200);
      expect(JSON.parse(body)).toEqual({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });
});

describe('Login Endpoint', () => {
  it('should return welcome message with username', (done) => {
    request.post({
      url: `${serverUrl}/login`,
      json: { userName: 'Betty' }
    }, (error, response, body) => {
      expect(response.statusCode).toEqual(200);
      expect(body).toEqual('Welcome Betty');
      done();
    });
  });
});

if (require.main === module) {
  (async () => {
    try {
      await Promise.resolve();
      console.log('Running tests...');
    } catch (error) {
      console.error('Error running tests:', error);
    }
  })();
}
