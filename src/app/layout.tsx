import React from 'react';

import { Montserrat } from 'next/font/google';

import GlobalContextProvider from '#components/context';
import { getUserData } from '#utils/function/getUserData';

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
	console.log(userData);
	return (
		<html>
			<body style={{ ['--fontFamily' as string]: montserrat.style.fontFamily }}>
				<GlobalContextProvider userData={userData} />
			</body>
		</html>
	);
}
