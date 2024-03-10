import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        shopName: {
            type: String,
            required: true,
        },
        addressLine1: {
            type: String,
            required: true,
        },
        addressLine2: {
            type: String,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        pincode: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        alternatePhone: {
            type: String,
        },
        email: {
            type: String,
        },
        gstNumber: {
            type: String,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        currentBalance: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const Customer =
    mongoose.models.Customer || mongoose.model("Customer", CustomerSchema);

export default Customer;
