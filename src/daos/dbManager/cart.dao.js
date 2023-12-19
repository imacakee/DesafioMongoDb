const { cartModel } = require("../../models/cart.model");

class CartDao {
  async addProduct(nuevoProducto) {
    try {
      await cartModel.create(nuevoProducto);
    } catch (error) {
      console.log(error);
    }
  }

  async getProduct(limit) {
    if (limit) {
      return await cartModel.find.limit(limit);
    }
    return await cartModel.find();
  }

  async getProductById(id) {
    return await cartModel.findById(id);
  }

  async updateProduct(id, updatedProduct) {
    try {
      return await cartModel.findByIdAndUpdate(id, updatedProduct);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProduct(id) {
    try {
      return await cartModel.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new CartDao();
