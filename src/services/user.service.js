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

  const user = await User.create(userFields);

  return { status: 'CREATED', data: user.id };
};

module.exports = {
  getByEmail,
  createUser,
};