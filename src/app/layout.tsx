import type { Metadata } from "next";
import type { ReactNode } from "react";

import Navigation from "#components/layouts/Navigation";
import { montserrat } from "#utils/helper/fontHelper";

import GlobalContextProvider from "../data/context";

import "./globals.scss";

// This is a demo build of the portfolio on GitHub Pages, carrying the same name and the same profile.json content as
// ritik.me. Left indexable the two compete for the same queries and the duplicate can only cost the real site. No
// robots.txt disallow to go with it on purpose: a crawler that is blocked from fetching the page never sees this tag,
// so a URL already in the index would stay there. Allowing the crawl is what gets it dropped.
export const metadata: Metadata = {
	robots: { follow: false, index: false },
	title: "Ritik Srivastava",
};

export default function RootLayout(props: IRootProps) {
	const { children } = props;

	return (
		<html lang="en">
			<body className={montserrat.variable} suppressHydrationWarning>
				<GlobalContextProvider>
					{children}
					<Navigation />
				</GlobalContextProvider>
			</body>
		</html>
	);
}

interface IRootProps {
	children?: ReactNode;
}
