import dbConnection from "@/lib/dbConnect";
import Challan from "@/models/challan";
import User from "@/models/user";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import ejs from "ejs";
import { ObjectId } from "mongodb";
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
            message: "No data provided",
            status: 400,
        });
    }

    const challans = await Challan.find({
        customer: new ObjectId(data.customer),
        createdAt: {
            $gte: data.startDate,
            $lt: data.endDate,
        },
    }).populate("customer");

    if (!challans) {
        return NextResponse.json({
            message: "No challans found",
        });
    }

    const invoiceHtml = await ejs.renderFile("src/views/invoice.ejs", {
        // challans: challans,
        // // customer: challans[0]?.customer,
        // user: user,
        // date: new Date(),
    });

    return NextResponse.json({
        data: invoiceHtml,
        status: 200,
    });
}
