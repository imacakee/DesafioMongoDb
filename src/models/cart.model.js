const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
  products: { type: Array, required: true, default: [] },
});

const cartModel = model("carts", cartSchema);

module.exports = { cartModel };
