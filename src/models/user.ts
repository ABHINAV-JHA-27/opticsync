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
    kindeUserId: {
        type: String,
    },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
