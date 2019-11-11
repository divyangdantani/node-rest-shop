const monngoose = require("mongoose");

const orderSchema = monngoose.Schema({
  _id: monngoose.Schema.Types.ObjectId,
  product: { type: monngoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, default: 1 }
});

module.exports = monngoose.model("Order", orderSchema);
