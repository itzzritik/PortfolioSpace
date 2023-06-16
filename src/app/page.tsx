import StarField from '#components/backgrounds/StarField';
import Animations from '#components/layouts/animations';

import styles from './page.module.scss';

export default function Home () {
	return (
		<div className={styles.home}>
			<Animations />
			<StarField className={styles.starField} />
		</div>
	);
}
