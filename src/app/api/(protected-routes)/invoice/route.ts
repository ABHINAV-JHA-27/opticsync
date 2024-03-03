import dbConnection from "@/lib/dbConnect";
import Challan from "@/models/challan";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    await dbConnection();
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

    return NextResponse.json({});
}
