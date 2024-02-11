import dbConnection from "@/lib/dbConnect";
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
    const user = await User.find({ kindeUserId: kindeUser?.id });
    return NextResponse.json({
        data: user,
        status: 200,
        message: "Success",
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
    const user = await User.create({ ...req.body, kindeUserId: kindeUser?.id });
    return NextResponse.json({
        data: user,
        status: 200,
        message: "Success",
    });
}

export async function PUT(req: NextRequest) {
    const { isAuthenticated, getUser } = getKindeServerSession();
    if (!(await isAuthenticated())) {
        return NextResponse.json({
            status: 401,
            message: "Unauthorized",
        });
    }
    await dbConnection();
    const kindeUser = await getUser();
    const user = await User.findOneAndUpdate(
        { kindeUserId: kindeUser?.id },
        { ...req.body },
        { new: true }
    );
    return NextResponse.json({
        data: user,
        status: 200,
        message: "Success",
    });
}

export async function DELETE(req: NextRequest) {
    const { isAuthenticated, getUser } = getKindeServerSession();
    if (!(await isAuthenticated())) {
        return NextResponse.json({
            status: 401,
            message: "Unauthorized",
        });
    }
    await dbConnection();
    const kindeUser = await getUser();
    const user = await User.findOneAndDelete({ kindeUserId: kindeUser?.id });
    return NextResponse.json({
        data: user,
        status: 200,
        message: "Success",
    });
}
