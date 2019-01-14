const routes = require('express').Router();

routes.all('*', (req, res) => {
  return res.status(418).json({ message: `I'm a teapot` });
});

module.exports = routes;
