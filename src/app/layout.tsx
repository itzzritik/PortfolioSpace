import type { ReactNode } from "react";

import Navigation from "#components/layouts/Navigation";
import { montserrat } from "#utils/helper/fontHelper";

import GlobalContextProvider from "../data/context";

import "./globals.scss";

export const metadata = {
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
