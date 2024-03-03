import dbConnection from "@/lib/dbConnect";
import { RandomChallanNumber } from "@/lib/randomNumberGenerator";
import Challan from "@/models/challan";
import Customer from "@/models/customer";
import Order from "@/models/order";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import ejs from "ejs";

export async function POST(req: NextRequest) {
    await dbConnection();
    const data = await req.json();

    if (!data) {
        return NextResponse.json({
            message: "No data provided",
            status: 400,
        });
    }

    const customer = await Customer.findById(data.customer);

    if (!customer) {
        return NextResponse.json({
            message: "Customer not found",
            status: 400,
        });
    }

    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    let endOfDay = new Date(currentDate);
    endOfDay.setHours(23, 59, 59, 999);

    const orders = await Order.find({
        customer: new ObjectId(data.customer),
        status: "received",
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
        challanNumber: RandomChallanNumber("user", customer.name),
    };

    // const challan = new Challan(challanData);
    // await challan.save();

    // orders.forEach(async (order) => {
    //     order.status = "delivered";
    //     await order.save();
    // });

    const challanHtml = await ejs.renderFile("src/views/challan.ejs", {
        challanNumber: challanData.challanNumber,
        date: currentDate,
        customer,
        orders,
    });

    return NextResponse.json({
        data: challanHtml,
        status: 200,
    });
}
