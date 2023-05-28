import React, { ReactNode } from 'react';
import { Html } from 'next/document';
import Head from 'next/head';

import GlobalContextProvider from '../components/context/index';

import './globals.scss';

export default function PortfolioLayout (props: IPortfolioProps) {
	const { pageProps, pageProps: { staticUser } } = props;

	console.log(pageProps);


	return (
		<Html>
			<Head>
				<link rel='stylesheet'
					href='https://fonts.googleapis.com/css2?family=Inconsolata:wght@200&family=Montserrat:wght@100;200;300;400;500;600;700;900&display=swap'
				/>
			</Head>
			<body>
				<GlobalContextProvider staticUser={staticUser}>
					{/* <Head><title>{staticUser?.name}</title></Head> */}
					{/* { Component.displayName != 'ErrorPage' && !removeSplash && <Splash loaded={pageLoaded} /> }
					<Header navActive={navActive} setNavActive={setNavActive} />
					<Navigation active={navActive} />
					<Component {...pageProps} rerender={rerender} setPageLoaded={setPageLoaded} /> */}
				</GlobalContextProvider>
			</body>
		</Html>
	);
}

interface IPortfolioProps {
	Component: ReactNode;
	pageProps: { staticUser: object };
}