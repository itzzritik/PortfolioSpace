import React, { ReactNode } from 'react';

import { Montserrat } from 'next/font/google';

import { getUserData } from '#utils/function/getUserData';

import GlobalContextProvider from '../data/context';

import './globals.scss';

const montserrat = Montserrat({
	weight: ['200', '300', '400', '500'],
	subsets: ['latin'],
});

export const metadata = {
	title: 'Ritik Srivastava',
};
export default async function RootLayout (props: IRootProps) {
	const { children } = props;
	const userData = await getUserData();

	return (
		<html lang='en' suppressHydrationWarning>
			<body style={{ ['--fontFamily' as string]: montserrat.style.fontFamily }}>
				<GlobalContextProvider userData={userData}>
					{ children }
				</GlobalContextProvider>
			</body>
		</html>
	);
}

interface IRootProps {
	children?: ReactNode;
}
