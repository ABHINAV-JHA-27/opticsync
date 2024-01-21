import dbConnection from "@/lib/dbConnect";
import Challan from "@/models/challan";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    { params }: { params: { customer: string } }
) {
    await dbConnection();
    const challans = await Challan.find({ customer: params.customer });

    if (!challans) {
        return NextResponse.json({
            message: "No data found",
            status: 204,
        });
    }

    return NextResponse.json({
        data: challans,
        status: 200,
    });
}
