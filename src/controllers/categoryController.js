const { Category } = require('../database/models');
// const generateToken = require('../helpers/generateToken');

const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const newCategory = await Category.create({ name });
  // const token = await generateToken({ id: newCategory.id });
  return res.status(201).json(newCategory);
};

const getCategories = async (req, res) => {
  const categories = await Category.findAll();
  res.status(200).json(categories);
};

module.exports = { createCategory, getCategories };
