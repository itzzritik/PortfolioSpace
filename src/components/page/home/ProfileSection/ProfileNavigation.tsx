import { profileSectionReversed } from '#data/constants/Profile';
import { EProfileNavigationID } from '#data/constants/ReactID';

import styles from './profileNavigation.module.scss';

export default function ProfileNavigation () {
	return (
		<div className={styles.profileNavigation}>
			<div className={styles.solarSystem} id={EProfileNavigationID.DISC}>
				{ Array(10).fill(0).map((v, i) => <span className={styles.navOrbit} key={i} />) }
				{profileSectionReversed.map((item, index) => {
					return (
						<div className={styles.navDiscItem} key={index} id={item?.id}>
							{
								item?.rings &&
								Array(15).fill(0).map((v, i) => <span className={styles.spinner} key={i} />)
							}
							<div className={styles.background}>{item?.name}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
