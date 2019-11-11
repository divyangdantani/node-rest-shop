const monngoose = require("mongoose");

const productSchema = monngoose.Schema({
  _id: monngoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  price: { type: Number, required: true }
});

module.exports = monngoose.model("Product", productSchema);
