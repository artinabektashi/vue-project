import mongoose from "mongoose";

const schema = mongoose.Schema({
    name: String,
    description: String
});

const model = mongoose.model("categories", schema);

export default model;