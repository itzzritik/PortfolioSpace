import { profileSectionReversed } from "#data/constants/Profile";
import { EProfileID } from "#data/constants/ReactID";

import styles from "./profileNavigation.module.scss";

export default function ProfileNavigation() {
	return (
		<div className={styles.profileNavigation}>
			<div className={styles.solarSystem} id={EProfileID.PROFILE_NAVIGATION}>
				<span className={styles.navOrbit} />
				{profileSectionReversed.map(({ id, Planet }) => (
					<div className={styles.navDiscItem} id={id} key={id}>
						<div className={styles.planet}>
							<Planet />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
