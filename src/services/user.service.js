const { User } = require('../models');
const validationCreateUserFields = require('./validation/validationCreateUserFields');

const getByEmail = async (email) => User.findOne({ where: { email } });

const createUser = async (userFields) => {
  const error = validationCreateUserFields(userFields);

  if (error) return { status: error.status, data: { message: error.message } };

  const userAlreadyExisting = await getByEmail(userFields.email);

  if (userAlreadyExisting) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } }; 
  }

  const newUser = await User.create(userFields);

  return { status: 'CREATED', data: newUser.id };
};

const getUserById = async (userId) => {
  const user = await User.findByPk(userId, {
    attributes: { exclude: ['password'] },
  });

  if (user === null) {
    return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
  }

  return { status: 'SUCCESSFUL', data: user };
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return { status: 'SUCCESSFUL', data: allUsers };
};

module.exports = {
  getByEmail,
  createUser,
  getUserById,
  getAllUsers,
};