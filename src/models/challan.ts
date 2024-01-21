import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ChallanSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
    status: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending",
    },
});

const Challan =
    mongoose.model("Challans") || mongoose.model("Challans", ChallanSchema);
