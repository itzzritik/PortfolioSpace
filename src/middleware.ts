import { TGitLinks } from '#data/types/userData';
import { getGitLinks } from '#utils/github/gitFetch';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

let redirectLinks: TGitLinks | undefined | null = undefined;
export default async function middleware (req: NextRequest, event: NextFetchEvent) {
	if (redirectLinks === undefined)
		redirectLinks = await getGitLinks();

	const pathname = req.nextUrl.pathname.replace(/^\/+/, '')

	if (redirectLinks && Object.keys(redirectLinks).includes(pathname))
		return NextResponse.redirect(redirectLinks[pathname])
	
	return NextResponse.next();
};

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
};
