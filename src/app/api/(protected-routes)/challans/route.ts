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

    const challanData = {
        user: user._id,
        orders: orders,
        total: orders.products.wlp,
        customer: customer,
        date: new Date(),
        challanNumber: RandomChallanNumber(user.shopName, customer.name),
    };

    const ejsFilePath = path.resolve("./src/views/challan.ejs");

    console.log({
        challanNumber: challanData.challanNumber,
        date: challanData.date.toLocaleDateString(),
        customer,
        orders,
        user,
        totalBeforeTax: orders.products.wlp,
        cgst: orders.products.cgst,
        sgst: orders.products.sgst,
        totalAfterTax:
            orders.products.wlp +
            (orders.products.wlp *
                (orders.products.cgst + orders.products.sgst)) /
                100,
        ref: orders.ref,
        amountInWords: numberToWords(
            orders.products.wlp +
                (orders.products.wlp *
                    (orders.products.cgst + orders.products.sgst)) /
                    100
        ),
    });

    const challanHtml = await ejs.renderFile(ejsFilePath, {
        challanNumber: challanData.challanNumber,
        date: challanData.date.toLocaleDateString(),
        customer,
        orders,
        user,
        totalBeforeTax: orders.products.wlp,
        cgst: orders.products.cgst,
        sgst: orders.products.sgst,
        totalAfterTax:
            orders.products.wlp +
            (orders.products.wlp *
                (orders.products.cgst + orders.products.sgst)) /
                100,
        ref: orders.ref,
        amountInWords: numberToWords(
            orders.products.wlp +
                (orders.products.wlp *
                    (orders.products.cgst + orders.products.sgst)) /
                    100
        ),
    });

    const prevChallan = await Challan.findOne({ orders: orders._id });

    if (prevChallan) {
        return NextResponse.json({
            data: challanHtml,
            status: 200,
        });
    }

    const challan = new Challan(challanData);
    await challan.save();

    orders.status = "delivered";
    await orders.save();

    return NextResponse.json({
        data: challanHtml,
        status: 200,
    });
}
