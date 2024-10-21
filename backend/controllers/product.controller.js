const productService = require("../services/product.service.js");

const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await productService.deleteProduct(req.params.id);
    return res.status(201).send({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const findProductById = async (req, res) => {
  try {
    const product = await productService.findProductById(req.params.id);
    return res.status(201).send({ message: "Product Updated Successfully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const product = await productServic.getAllProducts(req.query);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const createMultipleProducts = async (req, res) => {
  try {
    const product = await productServic.createMultipleProducts(req.body);
    return res.status(201).send({ message: "Product created Successfully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  findProductById,
  getAllProducts,
  createMultipleProducts,
};
