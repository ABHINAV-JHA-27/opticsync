import dbConnection from "@/lib/dbConnect";
import Customer from "@/models/customer";
import Order from "@/models/order";
import Product from "@/models/product";
import User from "@/models/user";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
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

    const order = await Order.findByIdAndDelete({
        _id: params.id,
        user: user._id,
    });

    if (!order) {
        return NextResponse.json({
            status: 404,
            data: "Order not found",
        });
    }

    const product = await Product.findById(order?.products);

    if (!product) {
        return NextResponse.json({
            status: 404,
            data: "Product not found",
        });
    }

    const customer = await Customer.findById(order?.customer);

    if (!customer) {
        return NextResponse.json({
            status: 404,
            data: "Customer not found",
        });
    }

    const price = (product.price * order.quantity) / 2;
    const finalPrice = price + ((product.cgst + product.sgst) * price) / 100;

    customer.currentBalance -= finalPrice;
    console.log("==> ", customer);
    await customer.save();

    return NextResponse.json({
        status: 200,
        data: "Order deleted successfully",
    });
}
