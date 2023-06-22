import React, { ReactNode } from 'react';

import Hotjar from '@hotjar/browser';

import Navigation from '#components/layouts/Navigation';
import Splash from '#components/layouts/Splash';
import { getUserData } from '#utils/function/getUserData';
import { montserrat } from '#utils/helper/fontHelper';

import GlobalContextProvider from '../data/context';

import './globals.scss';

Hotjar.init(parseInt(process.env.NEXT_PUBLIC_HOTJAR_SITE_ID ?? ''), 6);

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
					<Navigation />
					<Splash />
				</GlobalContextProvider>
			</body>
		</html>
	);
}

interface IRootProps {
	children?: ReactNode;
}
