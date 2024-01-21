import dbConnection from "@/lib/dbConnect";
import Challan from "@/models/challan";
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

    const challan = new Challan(data);
    await challan.save();

    return NextResponse.json({
        data: challan,
        status: 200,
    });
}
