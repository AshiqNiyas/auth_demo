import productModel from "../models/productModel.js";

export const addProduct = async (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.json({ error: "Name and price required" });
  }

  const newProduct = await productModel.create({
    name,
    price,
    user: req.user.id,
  });
  return res.json({ message: "Product created", product: newProduct });
};

export const getMyProducts = async (req, res) => {
  try {
    const products = await productModel.find({ user: req.user.id });
    res.json(products);
  } catch (error) {
    res.json({ error: error.message });
  }
};
