module.exports = (error, _req, res, _next) => {
  res.status(500).json({ message: 'Problema inesperado no servidor' });
};
