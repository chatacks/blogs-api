const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET || 'chatack';

const extractToken = (bearerToken) => bearerToken.split(' ')[1];

const validateToken = async (req, res, next) => {
  const bearerToken = req.header('Authorization');

  if (!bearerToken) {
    console.log(bearerToken);
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = extractToken(bearerToken);

  try {
    const decoded = jwt.verify(token, secret);

    const user = await userService.getUserById(decoded.data.userId);

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;