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
        },
        addressLine2: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        pincode: {
            type: String,
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
    },
    {
        timestamps: true,
    }
);

const Customer =
    mongoose.models.Customer || mongoose.model("Customer", CustomerSchema);

export default Customer;
