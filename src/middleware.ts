import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";
export default function middleware(req: NextRequest) {
    return withAuth(req);
}
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
