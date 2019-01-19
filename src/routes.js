const routes = require('express').Router();
const { PaymentController } = require('./controllers');

routes.post('/payment', PaymentController.store);

routes.all('*', (req, res) => {
  return res.status(418).json({ message: `I'm a teapot` });
});

module.exports = routes;
