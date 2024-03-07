const { userService } = require('../services');

const validatePerson = async (req, res, next) => {
  const { email } = req.body;
  const hasValidPerson = await userService.getByEmail(email);

  if (!hasValidPerson) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  return next();
};

module.exports = validatePerson;