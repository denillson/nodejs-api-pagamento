require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');

// mongodb
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true
});

// rotas
app.use(express.json());
app.use(routes);

// iniciando servidor
app.listen(process.env.APP_PORT, () => {
  console.log(`Servidor iniciado na porta ${process.env.APP_PORT}.`)
});
