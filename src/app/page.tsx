import StarField from '#components/backgrounds/StarField';
import LandingSection from '#components/page/home/LandingSection';
import { ELandingID } from '#data/constants/ReactID';
import Animations from '#utils/animations';

import styles from './page.module.scss';

export default function Home () {
	return (
		<div className={styles.home}>
			<Animations />
			<StarField className={styles.starField} />
			<div className={styles.landingContainer} id={ELandingID.CONTAINER}>
				<LandingSection />
			</div>
		</div>
	);
}
