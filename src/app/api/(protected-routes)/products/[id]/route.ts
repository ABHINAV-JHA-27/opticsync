import dbConnection from "@/lib/dbConnect";
import Product from "@/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    await dbConnection();

    const data = await req.json();
    const product = await Product.findByIdAndUpdate(params.id, data);

    if (!product) {
        return NextResponse.json({
            status: 404,
            data: "Product not found",
        });
    }

    product.save();

    return NextResponse.json({
        status: 200,
        data: "Products updated successfully",
    });
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    await dbConnection();

    const product = await Product.findByIdAndDelete(params.id);

    if (!product) {
        return NextResponse.json({
            status: 404,
            data: "Product not found",
        });
    }

    return NextResponse.json({
        status: 200,
        data: "Product deleted successfully",
    });
}
