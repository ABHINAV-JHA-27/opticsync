import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ChallanSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
    total: {
        type: Number,
        required: true,
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: "Customer",
    },
    date: {
        type: Date,
        required: true,
    },
});

const Challan =
    mongoose.models.Challan || mongoose.model("Challans", ChallanSchema);

export default Challan;
