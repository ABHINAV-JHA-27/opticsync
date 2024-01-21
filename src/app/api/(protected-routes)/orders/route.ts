import dbConnection from "@/lib/dbConnect";
import Order from "@/models/order";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    await dbConnection();

    const orders = await Order.find({});

    return NextResponse.json({
        data: orders,
        status: 200,
    });
}

export async function POST(req: NextRequest) {
    await dbConnection();

    const data = await req.json();

    if (!data) {
        return NextResponse.json({
            data: "No data provided",
            status: 400,
        });
    }

    const order = new Order(data);
    await order.save();

    return NextResponse.json({
        data: order,
        status: 200,
    });
}
