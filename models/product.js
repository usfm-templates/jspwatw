const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productschema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  tag: { type: String, required: true },
  image: { type: String, required: true },
  id: { type: Number, required: false, unique: true },
  sku: { type: String, required: true, unique: true},
  datecreated: { type: Date, default: Date.now, required: true },
});

const Product = mongoose.model("Product", productschema);

module.exports = Product;
