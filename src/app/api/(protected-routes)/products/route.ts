import dbConnection from "@/lib/dbConnect";
import Product from "@/models/product";
import User from "@/models/user";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
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

    const products = await Product.find({
        user: user._id,
    });

    return NextResponse.json({
        data: products,
        status: 200,
    });
}

export async function POST(req: any) {
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
            status: 400,
            data: "No data provided",
        });
    }

    const product = new Product({ ...data, user: user._id });
    await product.save();

    return NextResponse.json({
        status: 201,
        data: product,
    });
}
