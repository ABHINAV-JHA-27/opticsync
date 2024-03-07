import dbConnection from "@/lib/dbConnect";
import Customer from "@/models/customer";
import Payment from "@/models/payment";
import User from "@/models/user";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { isAuthenticated, getUser } = getKindeServerSession();

    if (!(await isAuthenticated())) {
        return NextResponse.json({
            status: 401,
            message: "Unauthorized",
        });
    }

    await dbConnection();

    const data = await req.json();

    if (!data) {
        return NextResponse.json({
            message: "No data provided",
            status: 400,
        });
    }

    const kindeUser = await getUser();

    const user = await User.findOne({ kindeUserId: kindeUser?.id });

    if (!user) {
        return NextResponse.json({
            status: 404,
            message: "User not found",
        });
    }

    const { amount, date, paymentMode, customer } = data;

    const customerd = await Customer.findById(customer);

    if (!customerd) {
        return NextResponse.json({
            message: "Customer not found",
            status: 400,
        });
    }

    const payment = new Payment({
        user: user._id,
        amount,
        date,
        paymentMode,
        customer,
    });

    customerd.currentBalance -= amount;

    await payment.save();
    await customerd.save();

    return NextResponse.json({
        message: "Payment added",
        status: 200,
    });
}

export async function GET(req: NextRequest) {
    const { isAuthenticated } = getKindeServerSession();

    if (!(await isAuthenticated())) {
        return NextResponse.json({
            status: 401,
            message: "Unauthorized",
        });
    }

    await dbConnection();

    const payments = await Payment.find();

    return NextResponse.json({
        status: 200,
        data: payments,
    });
}
