const mercadopago = require('mercadopago');

mercadopago.configure({
  client_id: process.env.MERCADOPAGO_CLIENT_ID,
  client_secret: process.env.MERCADOPAGO_SECRET_ID
});

module.exports = {

  async createPreference(data) {
    try {
      const { status, response } = await mercadopago.preferences.create({
        ...data,
        notification_url: process.env.MERCADOPAGO_NOTIFICAITON_URL
      });

      if (status === 201) {
        return response;
      }
    } catch (error) {}

    return false;
  }

};
