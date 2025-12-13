import { type NextRequest, NextResponse } from "next/server";
import { getGitProfile } from "#utils/github/gitFetch";

const redirectFromLinks = async (pathname: string) => {
	const links = (await getGitProfile())?.links;
	const map = new Map(links.map((link) => [link.key, link.url]));
	const targetUrl = map.get(pathname.slice(1));

	if (targetUrl) return NextResponse.redirect(targetUrl);
};
export default async function proxy(req: NextRequest) {
	const { search, pathname } = req.nextUrl;

	const redirect = await redirectFromLinks(pathname);
	if (redirect) return redirect;

	const response = NextResponse.next();
	response.headers.set("x-app-pathname", pathname);
	response.headers.set("x-app-search", search);
	return response;
}

export const config = {
	matcher: ["/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)"],
};
