import dbConnection from "@/lib/dbConnect";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnection();

    const products = await Product.find({});

    return NextResponse.json({
        data: products,
        status: 200,
    });
}

export async function POST(req: any) {
    await dbConnection();

    const data = await req.json();

    if (!data) {
        return NextResponse.json({
            status: 400,
            data: "No data provided",
        });
    }

    const product = new Product(data);
    await product.save();

    return NextResponse.json({
        status: 201,
        data: product,
    });
}
