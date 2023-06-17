import StarField from '#components/backgrounds/StarField';
import LandingSection from '#components/page/home/LandingSection';
import Animations from '#utils/animations';

import styles from './page.module.scss';

export default function Home () {
	return (
		<div className={styles.home}>
			<Animations />
			<StarField className={styles.starField} />
			<LandingSection />
		</div>
	);
}
