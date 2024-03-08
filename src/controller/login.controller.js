const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET || 'chatack';

const signIn = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userService.getByEmail(email);

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: { userId: user.dataValues.id } }, secret, jwtConfig);

    res.status(200).json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.sqlMessage });
  }
};

module.exports = {
  signIn,
};