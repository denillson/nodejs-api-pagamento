const { Payment } = require('../models');
const { MercadoPago } = require('../services');

module.exports = {
  async store(req, res) {
    try {
      // cria a preferencia de pagamento
      const preference = await MercadoPago.createPreference({
        items: [
          {
            id: 'ARTIGONODEJS',
            title: 'Integração com Mercado Pago no NodeJs',
            quantity: 1,
            currency_id: 'BRL',
            unit_price: 1.00
          }
        ],
        payer: {
          email: req.body.email
        }
      });

      // verifica se a preferencia foi criada
      if (! preference) {
        return res.status(400).json({ message: 'Não foi possivel iniciar o pagamento. Tente novamente!' });
      }

      // cria o registro de pagamento no banco de dados
      await Payment.create({ preference_id: preference.id });

      // verifica em qual ambiente sera feito o pagamento
      // produção ou homolocação
      const redirect_url = process.env.APP_MODE == 'development'
        ? preference.sandbox_init_point
        : preference.init_point;

      // retorna a url para realizar o pagamento
      return res.status(201).json({
        message: 'Pagamento iniciado.',
        redirect_url
      });
    } catch (error) {
      return res.status(400).json({
        message: 'Não foi possivel iniciar o pagamento. Tente novamente!',
        error
      });
    }
  }
};
