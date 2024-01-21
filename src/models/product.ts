import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        company: {
            type: String,
            required: true,
        },
        wlp: {
            type: Number,
            required: true,
        },
        srp: {
            type: Number,
            required: true,
        },
        index: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Product =
    mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
