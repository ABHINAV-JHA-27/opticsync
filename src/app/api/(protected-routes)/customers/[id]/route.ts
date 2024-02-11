import dbConnection from "@/lib/dbConnect";
import Customer from "@/models/customer";
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

    const customer = await Customer.findOneAndDelete({
        _id: params.id,
        user: user._id,
    });

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
