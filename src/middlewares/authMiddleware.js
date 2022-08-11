const jwt = require('jsonwebtoken');

const tokenMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const result = jwt.verify(token, process.env.JWT_SECRET);
    console.log(result);
    req.tokenCreated = result.data;
    next();
  } catch (error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { tokenMiddleware };
