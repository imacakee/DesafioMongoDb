const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
  items: [
    {
      product: { type: Schema.Types.ObjectId, default: [], ref: "products" },
      quantity: { type: Number, default: 1 },
    },
  ],
});

const cartModel = model("carts", cartSchema);

module.exports = { cartModel };
