const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '3d',
};

const SECRET = process.env.JWT_SECRET;

module.exports = (payload = {}) => jwt.sign({ data: payload }, SECRET, jwtConfig);
