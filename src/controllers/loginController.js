const generateToken = require('../helpers/generateToken');
const { User } = require('../database/models');

const loginController = async (req, res) => {
  const { email, password } = await req.body;
  if (!email || !password) {
  return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const [userMail] = await User.findAll({ where: { email, password } });
  if (!userMail) return res.status(400).json({ message: 'Invalid fields' });
  if (userMail.dataValues.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  const token = await generateToken({ id: userMail.dataValues.id, email });

  return res.status(200).json({ token });
};

module.exports = { loginController };
