import Hero from './Hero';
import Minor from './Minor';
import styles from './landingSection.module.scss';

export default function LandingSection () {
	return (
		<div className={styles.landingSection}>
			<div className={styles.container}>
				<div className={styles.primary}>
					<Hero />
					<Minor />
				</div>
				<div className={styles.overlay}>
					<Hero isOverlay />
					<Minor isOverlay />
				</div>
			</div>
		</div>
	);
}
