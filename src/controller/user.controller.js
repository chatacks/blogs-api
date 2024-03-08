const jwt = require('jsonwebtoken');
const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHttp');

const secret = process.env.JWT_SECRET || 'chatack';

const createUser = async (req, res) => {
  try {
    const userFields = req.body;
    const { status, data } = await userService.createUser(userFields);

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    if (data.message) {
      return res.status(mapStatusHTTP(status)).json(data);
    }

    const token = jwt.sign({ data: { userId: data } }, secret, jwtConfig);

    res.status(mapStatusHTTP(status)).json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.sqlMessage });
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const { status, data } = await userService.getAllUsers();
    res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.sqlMessage });
  }
};

module.exports = {
  createUser,
  getAllUsers,
};