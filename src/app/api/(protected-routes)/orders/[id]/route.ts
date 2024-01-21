import dbConnection from "@/lib/dbConnect";
import Order from "@/models/order";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    await dbConnection();

    const data = await req.json();
    const order = await Order.findByIdAndUpdate(params.id, data);

    if (!order) {
        return NextResponse.json({
            status: 404,
            data: "Order not found",
        });
    }

    order.save();

    return NextResponse.json({
        status: 200,
        data: "Order updated successfully",
    });
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    await dbConnection();

    const order = await Order.findByIdAndDelete(params.id);

    if (!order) {
        return NextResponse.json({
            status: 404,
            data: "Order not found",
        });
    }

    return NextResponse.json({
        status: 200,
        data: "Order deleted successfully",
    });
}
