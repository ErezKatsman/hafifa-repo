import mongoose from "mongoose";

const duckSchema = new mongoose.Schema({
  name: String,
  color: String,
});

export const Duck = mongoose.model("Duck", duckSchema);
