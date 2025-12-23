import { type NextRequest, NextResponse } from "next/server";

export default async function proxy(req: NextRequest) {
	const { search, pathname } = req.nextUrl;

	const response = NextResponse.next();
	response.headers.set("x-app-pathname", pathname);
	response.headers.set("x-app-search", search);
	return response;
}

export const config = {
	matcher: ["/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)"],
};
