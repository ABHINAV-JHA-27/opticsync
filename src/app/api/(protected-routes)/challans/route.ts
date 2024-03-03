import dbConnection from "@/lib/dbConnect";
import Order from "@/models/order";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    await dbConnection();
    const data = await req.json();

    if (!data) {
        return NextResponse.json({
            message: "No data provided",
            status: 400,
        });
    }

    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    let endOfDay = new Date(currentDate);
    endOfDay.setHours(23, 59, 59, 999);

    const orders = await Order.find({
        customer: new ObjectId(data.customer),
        status: "pending",
        updatedAt: {
            $gte: currentDate,
            $lt: endOfDay,
        },
    }).populate("products");

    if (!orders) {
        return NextResponse.json({
            message: "No orders found",
        });
    }

    const challanData = {
        // user: data.user,
        orders: orders.map((order) => order._id),
        total: orders.reduce((acc, order) => acc + order.products.wlp, 0),
        customer: data.customer,
        date: currentDate,
        // challanNumber: `CH-${Date.now()}`,
    };

    // const challan = new Challan(data);
    // await challan.save();

    return NextResponse.json({
        // data: orders,
        status: 200,
    });
}
