import StarField from '#components/backgrounds/StarField';

import styles from './page.module.scss';

export default function Home () {
	return (
		<div className={styles.home}>
			<StarField className={styles.starField} />
		</div>
	);
}
