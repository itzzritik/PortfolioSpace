'use client';

import { useEffect, useLayoutEffect, useState } from 'react';

import clsx from 'clsx';

import R from '#assets/img/logo/r.svg';
import S from '#assets/img/logo/s.svg';

import styles from './splash.module.scss';

export default function Splash () {
	const [loaded, setLoaded] = useState(false);
	const [animateSplash, setAnimateSplash] = useState(false);

	const splashClass = clsx(
		styles.splash,
		animateSplash && styles.loaded,
	);

	useEffect(() => {
		animateSplash && setTimeout(() => setLoaded(true), 2200);
	}, [animateSplash]);

	useLayoutEffect(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
			setAnimateSplash(true);
		}, 300);
	}, []);

	if (loaded) return null;

	return (
		<div className={splashClass}>
			<div className={styles.left} />
			<div className={styles.right} />
			<svg className={styles.loader}>
				<circle cx='50%' cy='50%' radius='30' />
			</svg>
			<R className={styles.ritik} />
			<S className={styles.srivastava} />
		</div>
	);
}
