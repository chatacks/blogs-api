const { categoryService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHttp');

const insertCategory = async (req, res) => {
  try {
    const categoryFields = req.body;
    const { status, data } = await categoryService.insertCategory(categoryFields);
    res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.sqlMessage });
  }
};

const getAllCategories = async (_req, res) => {
  try {
    const { status, data } = await categoryService.getAllCategories();
    res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.sqlMessage });
  }
};

module.exports = {
  insertCategory,
  getAllCategories,
};