const { productModel } = require("../../models/product.model");

class ProductDao {
  async addProduct(nuevoProducto) {
    try {
      await productModel.create(nuevoProducto);
    } catch (error) {
      console.log(error);
    }
  }

  async getProduct(limit) {
    if (limit) {
      return await productModel.find.limit(limit);
    }
    return await productModel.find();
  }

  async getProductById(id) {
    return await productModel.findById(id);
  }

  async updateProduct(id, updatedProduct) {
    try {
      return await productModel.findByIdAndUpdate(id, updatedProduct);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProduct(id) {
    try {
      return await productModel.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new ProductDao();
