const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const token = await req.headers.authorization;
  // console.log(token);
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const result = await jwt.verify(token, process.env.JWT_SECRET);
    req.tokenCreated = result.data;
    next();
  } catch (error) {
    if (error.name.includes('Token')) {
      return req.status(401).json({ message: 'Expired or invalid token' });
    } 
    next(error);
  }
};
