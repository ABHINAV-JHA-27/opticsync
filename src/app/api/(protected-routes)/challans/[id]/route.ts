import dbConnection from "@/lib/dbConnect";
import Challan from "@/models/challan";
import { NextRequest, NextResponse } from "next/server";
import ejs from "ejs";
import User from "@/models/user";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET(
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

    const challans = await Challan.findById(params.id)
        .populate("orders")
        .populate("products")
        .populate("customer");

    if (!challans) {
        return NextResponse.json({
            message: "No data found",
            status: 204,
        });
    }

    const challanHtml = await ejs.renderFile("src/views/challan.ejs", {
        challanNumber: challans.challanNumber,
        date: challans.date,
        customer: challans.customer,
        orders: challans.orders,
        user: user,
        total: challans.total,
    });

    return NextResponse.json({
        data: challanHtml,
        status: 200,
    });
}
