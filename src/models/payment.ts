import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: "Customer",
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    paymentMode: {
        type: String,
        enum: ["cash", "cheque", "upi", "neft", "rtgs", "other"],
        required: true,
    },
});

const Payment =
    mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);

export default Payment;
