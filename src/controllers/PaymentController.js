const { Payment } = require('../models');

module.exports = {
  async store(req, res) {
    return res.status(201).json({ message: 'Requisição de pagamento criada' });
  },

  async show(req, res) {
    const payment = Payment;

    return res.json({ payment });
  }
};
