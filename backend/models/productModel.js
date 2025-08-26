import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
});

const productModel = mongoose.model("products", productSchema);

export default productModel;
