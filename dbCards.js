import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String,
    age: Number,
    status: String,
    tags: [String],
})

export default mongoose.model('cards', cardSchema)