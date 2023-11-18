
import { Schema, model } from "mongoose";


const productSchema = new Schema({
    name: String,
    price: Number,
    description: String
}, { timestamps: true })

const Product = model("product", productSchema)

export default Product;

