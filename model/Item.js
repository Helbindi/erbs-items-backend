import mongoose from "mongoose";
const { Schema, model } = mongoose;

const itemSchema = new Schema({
  name: String,
  type: String,
  subtype: String,
  rarity: String,
  imageUrl: String,
  stats: [
    { name: String, value: Number, ratio: String, unique: Boolean, _id: false },
  ],
  passive: { name: String, desc: [String], _id: false },
  components: [String],
});

const Item = model("Item", itemSchema, "items");
export default Item;
