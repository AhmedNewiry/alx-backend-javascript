const request = require('supertest');
const app = require('./api');

const serverUrl = 'http://localhost:7865';

describe('Cart Page Endpoints', () => {
  it('should return payment methods for a valid cart ID', async () => {
    const res = await request(serverUrl).get('/cart/12');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Payment methods for cart 12');
  });

  it('should return 404 for an invalid cart ID (non-number)', async () => {
    const res = await request(serverUrl).get('/cart/hello');
    expect(res.statusCode).toEqual(404);
    expect(res.text).toContain('Invalid cart id. Cart id must be a number.');
  });
});

describe('Available Payments Endpoint', () => {
  it('should return available payment methods', async () => {
    const res = await request(serverUrl).get('/available_payments');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      payment_methods: {
        credit_cards: true,
        paypal: false,
      },
    });
  });
});

describe('Login Endpoint', () => {
  it('should return welcome message with username', async () => {
    const res = await request(serverUrl)
      .post('/login')
      .send({ userName: 'Betty' })
      .set('Content-Type', 'application/json');
    
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Welcome Betty');
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
