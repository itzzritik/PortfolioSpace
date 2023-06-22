'use client';

import { useLayoutEffect, useState } from 'react';

import StarField from '#components/backgrounds/StarField';
import UnderConstruction from '#components/layouts/UnderConstruction';
import LandingSection from '#components/page/home/LandingSection';
import ProfileSection from '#components/page/home/ProfileSection';
import HomeAnimations from '#components/plugins/animations/home';
import { ELandingID } from '#data/constants/ReactID';

import styles from './page.module.scss';

export default function Home () {
	const [screenWidth, setScreenWidth] = useState(0);

	useLayoutEffect(() => {
		const handleResize = () => setScreenWidth(window.innerWidth);
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	if (screenWidth <= 1000) {
		return <UnderConstruction message='This screen size is currently not supported!' />;
	}

	return (
		<div className={styles.home}>
			<HomeAnimations />
			<StarField className={styles.starField} />
			<div className={styles.landingContainer} id={ELandingID.CONTAINER}>
				<LandingSection />
			</div>
			<div className={styles.profileContainer}>
				{<ProfileSection />}
			</div>
		</div>
	);
}
