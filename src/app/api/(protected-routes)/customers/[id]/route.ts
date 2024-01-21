import dbConnection from "@/lib/dbConnect";
import Customer from "@/models/customer";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    await dbConnection();
    const data = await req.json();

    if (!data) {
        return NextResponse.json({
            data: "No data provided",
            status: 400,
        });
    }

    const customer = await Customer.findByIdAndUpdate(params.id, data);

    if (!customer) {
        return NextResponse.json({
            status: 404,
            data: "Customer not found",
        });
    }

    customer.save();

    return NextResponse.json({
        status: 200,
        data: "Customer updated successfully",
    });
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    await dbConnection();

    const customer = await Customer.findByIdAndDelete(params.id);

    if (!customer) {
        return NextResponse.json({
            status: 404,
            data: "Customer not found",
        });
    }

    return NextResponse.json({
        status: 200,
        data: "Customer deleted successfully",
    });
}
