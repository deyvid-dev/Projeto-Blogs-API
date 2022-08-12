const { User } = require('../database/models');
const generateToken = require('../helpers/generateToken');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  if (displayName.length < 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  if (password.length < 6) {
    return res.status(400)
    .json({ message: '"password" length must be at least 6 characters long' });
  }
  const regex = /\S+@\S+\.\S+/;
  if (!regex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  const emailExists = await User.findOne({ where: { email } });
  if (emailExists) return res.status(409).json({ message: 'User already registered' });
  const newUser = await User.create({ displayName, email, password, image });
  const token = generateToken({ id: newUser.id });
  return res.status(201).json({ token });
};

const getUsers = async (_req, res) => {
  const users = await User.findAll({
    raw: true,
    attributes: { exclude: ['password'] },
  });
  return res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const dltUser = await User.findByPk(id, 
    { raw: true, attributes: { exclude: ['password'] },
  });
  return res.status(204).end(dltUser);
};

module.exports = { createUser, getUsers, getById, deleteUser };
