import React, { useState, useEffect } from 'react';

import Head from 'next/head';

import GlobalContextProvider from '../components/context/index.jsx';

import '../styles/globals.scss';

export default function Home (props: IHomeProps) {
	const { Component, pageProps, pageProps: { staticUser } } = props;
	const [pageLoaded, setPageLoaded] = useState(false);
	const [removeSplash, setRemoveSplash] = useState(false);
	const [navActive, setNavActive] = useState(false);


	useEffect(() => {
		pageLoaded && setTimeout(() => setRemoveSplash(true), 2200);
	}, [pageLoaded]);

	return (
		<GlobalContextProvider staticUser={staticUser}>
			<Head><title>{staticUser?.name}</title></Head>
			{/* { Component.displayName != 'ErrorPage' && !removeSplash && <Splash loaded={pageLoaded} /> }
			<Header navActive={navActive} setNavActive={setNavActive} />
			<Navigation active={navActive} />
			<Component {...pageProps} rerender={rerender} setPageLoaded={setPageLoaded} /> */}
		</GlobalContextProvider>
	);
}

interface IHomeProps {
	Component: React.FC;
	pageProps: { staticUser: object };
}