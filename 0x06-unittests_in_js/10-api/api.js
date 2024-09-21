const express = require('express');
const app = express();
const port = 7865;

app.use(express.json());

app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

app.get('/cart/:id', (req, res) => {
  res.status(404).send('Invalid cart id. Cart id must be a number.');
});

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
  });
}

module.exports = app;
