import mongoose from "mongoose";

const Schema = mongoose.Schema;

const OrderSchema = new Schema(
    {
        r: {
            sph: {
                type: String,
                required: true,
            },
            cyl: {
                type: String,
                required: true,
            },
            axis: { type: String, required: true },
            add: { type: String },
        },
        l: {
            sph: {
                type: String,
                required: true,
            },
            cyl: {
                type: String,
                required: true,
            },
            axis: { type: String, required: true },
            add: { type: String },
        },
        status: {
            type: String,
            enum: ["pending", "ordered", "delivered", "cancelled", "received"],
            default: "pending",
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        products: {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
        customer: {
            type: Schema.Types.ObjectId,
            ref: "Customer",
        },
        challan: {
            type: Schema.Types.ObjectId,
            ref: "Challan",
        },
        note: {
            type: String,
        },
        ref: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.models.orders || mongoose.model("orders", OrderSchema);

export default Order;
