import dbConnection from "@/lib/dbConnect";
import numberToWords from "@/lib/numberToWord";
import { RandomInvoiceNumber } from "@/lib/randomNumberGenerator";
import Challan from "@/models/challan";
import User from "@/models/user";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import ejs from "ejs";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

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
            $gte: new Date(data.startDate),
            $lt: new Date(data.endDate),
        },
    }).populate("customer");

    if (!challans || challans.length === 0) {
        return NextResponse.json({
            message: "No challans found",
        });
    }

    const ejsFilePath = path.resolve("./src/views/invoice.ejs");

    const invoiceHtml = await ejs.renderFile(ejsFilePath, {
        challans: challans,
        customer: challans[0]?.customer,
        user: user,
        date: new Date().toLocaleDateString(),
        total: challans.reduce((acc, curr) => acc + curr.total, 0),
        invoiceNumber: RandomInvoiceNumber(
            user.shopName,
            challans[0]?.customer.name
        ),
        amountInWords: numberToWords(
            challans.reduce((acc, curr) => acc + curr.totalAfterTax, 0)
        ),
        totalAfterTax: challans.reduce(
            (acc, curr) => acc + curr.totalAfterTax,
            0
        ),
    });

    return NextResponse.json({
        data: invoiceHtml,
        status: 200,
    });
}
