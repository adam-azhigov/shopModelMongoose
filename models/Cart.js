const { Schema, model } = require("mongoose");

const Cart = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      amount: {
        type: Number,
        default: 1
      },
    },
  ],
  pathToAvatar: {
    type: String
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = model("Cart", Cart);
