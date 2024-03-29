import dbConnection from "@/lib/dbConnect";
import numberToWords from "@/lib/numberToWord";
import { RandomInvoiceNumber } from "@/lib/randomNumberGenerator";
import Challan from "@/models/challan";
import Payment from "@/models/payment";
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

    let invNumber = user.invoiceNumber;
    const currentDate = new Date();
    if (currentDate.getMonth() === 3 && currentDate.getDate() === 1) {
        if (user.lastAprilInvoiceNumber == 1) {
            user.lastAprilInvoiceNumber += 1;
            invNumber = 1;
        }
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

    const payments = await Payment.find({
        customer: new ObjectId(data.customer),
        createdAt: {
            $gte: new Date(data.startDate),
            $lt: new Date(data.endDate),
        },
    });

    const ejsFilePath = path.resolve("./src/views/invoice.ejs");

    const invoiceHtml = await ejs.renderFile(ejsFilePath, {
        challans: challans,
        customer: challans[0]?.customer,
        user: user,
        date: new Date().toLocaleDateString("en-GB"),
        total: challans.reduce((acc, curr) => acc + curr.total, 0).toFixed(2),
        invoiceNumber: RandomInvoiceNumber(user.shopName, invNumber),
        amountInWords: numberToWords(
            challans.reduce((acc, curr) => acc + curr.totalAfterTax, 0)
        ),
        totalAfterTax: challans
            .reduce((acc, curr) => acc + curr.totalAfterTax, 0)
            .toFixed(2),
        payment: payments
            .reduce((acc, curr) => acc + curr.amount, 0)
            .toFixed(2),
    });

    // user.invoiceNumber += 1;
    // await user.save();

    return NextResponse.json({
        data: invoiceHtml,
        status: 200,
    });
}
