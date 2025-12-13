import { ELandingID } from "#data/constants/ReactID";

import Hero from "./Hero";
import styles from "./landingSection.module.scss";
import Minor from "./Minor";

export default function LandingSection() {
	return (
		<div className={styles.landingSection}>
			<div className={styles.container}>
				<div className={styles.primary}>
					<Hero />
					<Minor />
				</div>
				<div className={styles.overlay} id={ELandingID.OVERLAY}>
					<Hero isOverlay />
					<Minor isOverlay />
				</div>
			</div>
		</div>
	);
}
