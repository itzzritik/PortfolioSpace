import StarField from '#components/backgrounds/StarField';
import LandingSection from '#components/page/home/LandingSection';
import ProfileSection from '#components/page/home/ProfileSection';
import HomeAnimations from '#components/plugins/animations/home';
import { ELandingID } from '#data/constants/ReactID';

import styles from './page.module.scss';

export default function Home () {
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
