import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    shopName: {
        type: String,
        required: true,
    },
    gstNumber: {
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
    bankName: {
        type: String,
        required: true,
    },
    bankBranch: {
        type: String,
        required: true,
    },
    bankAccountNumber: {
        type: String,
        required: true,
    },
    ifscCode: {
        type: String,
        required: true,
    },
    bankAccountHolderName: {
        type: String,
        required: true,
    },
    challanNumber: {
        type: Number,
        default: 1,
    },
    lastAprilChallanNumber: {
        type: Number,
        default: 1,
    },
    invoiceNumber: {
        type: Number,
        default: 1,
    },
    lastAprilInvoiceNumber: {
        type: Number,
        default: 1,
    },
    kindeUserId: {
        type: String,
    },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
