import dbConnection from "@/lib/dbConnect";
import Customer from "@/models/customer";
import Order from "@/models/order";
import Product from "@/models/product";
import User from "@/models/user";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { isAuthenticated, getUser } = getKindeServerSession();

    if (!(await isAuthenticated())) {
        return NextResponse.json({
            status: 401,
            message: "Unauthorized",
        });
    }

    await dbConnection();

    const kindeUser = await getUser();

    const user = await User.findOne({ kindeUserId: kindeUser?.id });

    if (!user) {
        return NextResponse.json({
            status: 404,
            message: "User not found",
        });
    }

    const orders = await Order.find({
        user: user._id,
    });

    return NextResponse.json({
        data: orders,
        status: 200,
    });
}

export async function POST(req: NextRequest) {
    const { isAuthenticated, getUser } = getKindeServerSession();

    if (!(await isAuthenticated())) {
        return NextResponse.json({
            status: 401,
            message: "Unauthorized",
        });
    }

    await dbConnection();

    const kindeUser = await getUser();

    const user = await User.findOne({ kindeUserId: kindeUser?.id });

    if (!user) {
        return NextResponse.json({
            status: 404,
            message: "User not found",
        });
    }

    const data = await req.json();

    if (!data) {
        return NextResponse.json({
            data: "No data provided",
            status: 400,
        });
    }

    const customer = await Customer.findById(data.customer);
    const product = await Product.findById(data.products);
    customer.currentBalance = customer?.currentBalance + product?.price;

    const order = new Order({
        ...data,
        user: user._id,
    });
    await order.save();
    await customer.save();

    return NextResponse.json({
        data: order,
        status: 200,
    });
}
