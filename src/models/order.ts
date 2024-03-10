import mongoose from "mongoose";

const Schema = mongoose.Schema;

const OrderSchema = new Schema(
    {
        r: {
            sph: {
                type: String,
            },
            cyl: {
                type: String,
            },
            axis: { type: String },
            add: { type: String },
        },
        l: {
            sph: {
                type: String,
            },
            cyl: {
                type: String,
            },
            axis: { type: String },
            add: { type: String },
        },
        type: {
            type: String,
            enum: ["stock", "rx", "fitting"],
            required: true,
        },
        status: {
            type: String,
            enum: ["pending", "ordered", "delivered", "cancelled", "received"],
            default: "pending",
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        products: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        customer: {
            type: Schema.Types.ObjectId,
            ref: "Customer",
            required: true,
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
