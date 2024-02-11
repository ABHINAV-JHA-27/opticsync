import dbConnection from "@/lib/dbConnect";
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

    const product = await Product.findByIdAndUpdate(params.id, data);

    if (!product) {
        return NextResponse.json({
            status: 404,
            data: "Product not found",
        });
    }

    await product.save();

    return NextResponse.json({
        status: 200,
        data: "Products updated successfully",
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

    const product = await Product.findOneAndDelete({
        _id: params.id,
        user: user._id,
    });

    if (!product) {
        return NextResponse.json({
            status: 404,
            data: "Product not found",
        });
    }

    return NextResponse.json({
        status: 200,
        data: "Product deleted successfully",
    });
}
