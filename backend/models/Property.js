import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  title: String,
  price: Number,
  location: String,
  description: String,
  image: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Property = mongoose.model("Property", propertySchema);
export default Property;
