import dbConnection from "@/lib/dbConnect";
import Customer from "@/models/customer";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    await dbConnection();
    const customer = await Customer.find({});

    return NextResponse.json({
        data: customer,
        status: 200,
    });
}

export async function POST(req: NextRequest) {
    await dbConnection();
    const data = await req.json();

    if (!data) {
        return NextResponse.json({
            data: "No data provided",
            status: 400,
        });
    }

    const customer = new Customer(data);
    await customer.save();

    return NextResponse.json({
        data: customer,
        status: 200,
    });
}
