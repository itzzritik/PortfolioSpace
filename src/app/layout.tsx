import React from 'react';

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
export default async function RootLayout () {
	const userData = await getUserData();

	return (
		<html>
			<body style={{ ['--fontFamily' as string]: montserrat.style.fontFamily }}>
				<GlobalContextProvider userData={userData}>
					<div id='root' />
				</GlobalContextProvider>
			</body>
		</html>
	);
}
