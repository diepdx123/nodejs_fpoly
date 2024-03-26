import Product from "../module/product";

export const getProducts = async (req, res) => {
  try {
    const data = await Product.find();
    res.status(200).json(data);
    if (data.length < 0) {
      return res.status(404).json({ message: "No products found!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const data = await Product.findOne({ _id: req.params.id });
    res.status(200).json(data);
    if (!data) {
      return res.status(404).json({ message: "No products found!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addProduct = async (req, res) => {
  try {
    const data = await Product(req.body).save();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const data = await Product.findOneAndDelete({ _id: req.params.id });
    res.status(201).json(data);
    if (!data) {
      return res.status(404).json({ message: "No products found!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const data = await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(201).json(data);
    if (!data) {
      return res.status(404).json({ message: "No products found!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
