import dbConnection from "@/lib/dbConnect";
import Product from "@/models/product";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnection();
    const { getUser, isAuthenticated } = getKindeServerSession();

    if (!(await isAuthenticated())) {
        return new Response("Unauthorized", { status: 401 });
    }

    const user = await getUser();
    console.log(user);

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
