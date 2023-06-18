import React, { ReactNode } from 'react';

import { getUserData } from '#utils/function/getUserData';
import { montserrat } from '#utils/helper/fontHelper';

import GlobalContextProvider from '../data/context';

import './globals.scss';

export const metadata = {
	title: 'Ritik Srivastava',
};
export default async function RootLayout (props: IRootProps) {
	const { children } = props;
	const userData = await getUserData();

	return (
		<html lang='en'>
			<body className={montserrat.variable} suppressHydrationWarning>
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
