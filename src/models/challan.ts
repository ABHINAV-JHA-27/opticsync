import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ChallanSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        orders: {
            type: Schema.Types.ObjectId,
            ref: "Order",
        },

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
        challanNumber: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Challan =
    mongoose.models.Challan || mongoose.model("Challan", ChallanSchema);

export default Challan;
