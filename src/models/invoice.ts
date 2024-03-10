import mongoose from "mongoose";

const Schema = mongoose.Schema;

const InvoiceSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        challans: [
            {
                type: Schema.Types.ObjectId,
                ref: "Challan",
                required: true,
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
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        invoiceNumber: {
            type: String,
            required: true,
        },
        totalAfterTax: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Invoice =
    mongoose.models.Invoice || mongoose.model("Invoice", InvoiceSchema);
