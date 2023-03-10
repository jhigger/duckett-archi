import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const Middleware = (req: NextRequest) => {
	if (
		req.nextUrl.pathname === req.nextUrl.pathname.toLowerCase() ||
		["_next", "projects"].includes(req.nextUrl.pathname.split("/")[1] ?? "")
	)
		return NextResponse.next();

	return NextResponse.redirect(
		new URL(req.nextUrl.origin + req.nextUrl.pathname.toLowerCase())
	);
};

export default Middleware;
