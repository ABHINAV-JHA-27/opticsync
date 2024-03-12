import dbConnection from "@/lib/dbConnect";
import { RandomChallanNumber } from "@/lib/randomNumberGenerator";
import Challan from "@/models/challan";
import Customer from "@/models/customer";
import Order from "@/models/order";
import User from "@/models/user";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import ejs from "ejs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import numberToWords from "@/lib/numberToWord";

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

    let chNumber = user.challanNumber;
    const currentDate = new Date();
    if (currentDate.getMonth() === 3 && currentDate.getDate() === 1) {
        if (user.lastAprilChallanNumber == 1) {
            user.lastAprilChallanNumber += 1;
            chNumber = 1;
        }
    }

    const orders = await Order.findById(data.orderID).populate("products");

    if (!orders) {
        return NextResponse.json({
            message: "No orders found",
        });
    }

    const customer = await Customer.findById(orders.customer);

    if (!customer) {
        return NextResponse.json({
            message: "Customer not found",
            status: 400,
        });
    }

    const ejsFilePath = path.resolve("./src/views/challan.ejs");

    const beforeTax = (orders.products.price * orders.quantity) / 2;

    const challanData = {
        user: user._id,
        orders: orders,
        total: beforeTax,
        customer: customer,
        date: new Date(),
        challanNumber: RandomChallanNumber(user.shopName, chNumber),
        totalAfterTax:
            beforeTax +
            (beforeTax * (orders.products.cgst + orders.products.sgst)) / 100,
    };

    const prevChallan = await Challan.findOne({ orders: orders._id });

    if (prevChallan) {
        const challanHtml = await ejs.renderFile(ejsFilePath, {
            challanNumber: prevChallan.challanNumber,
            date: new Date().toLocaleDateString(),
            customer,
            orders,
            user,
            totalBeforeTax: beforeTax,
            cgst: orders.products.cgst,
            sgst: orders.products.sgst,
            totalAfterTax:
                beforeTax +
                (beforeTax * (orders.products.cgst + orders.products.sgst)) /
                    100,
            ref: orders.ref,
            amountInWords: numberToWords(
                beforeTax +
                    (beforeTax *
                        (orders.products.cgst + orders.products.sgst)) /
                        100
            ),
        });
        return NextResponse.json({
            data: challanHtml,
            status: 200,
        });
    }

    const challanHtml = await ejs.renderFile(ejsFilePath, {
        challanNumber: challanData.challanNumber,
        date: new Date().toLocaleDateString(),
        customer,
        orders,
        user,
        totalBeforeTax: beforeTax,
        cgst: orders.products.cgst,
        sgst: orders.products.sgst,
        totalAfterTax:
            beforeTax +
            (beforeTax * (orders.products.cgst + orders.products.sgst)) / 100,
        ref: orders.ref,
        amountInWords: numberToWords(
            beforeTax +
                (beforeTax * (orders.products.cgst + orders.products.sgst)) /
                    100
        ),
    });

    const challan = new Challan(challanData);
    await challan.save();

    user.challanNumber = chNumber + 1;
    await user.save();

    orders.status = "delivered";
    await orders.save();

    return NextResponse.json({
        data: challanHtml,
        status: 200,
    });
}
