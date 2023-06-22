import { profileSectionReversed } from '#data/constants/Profile';
import { EProfileID } from '#data/constants/ReactID';

import styles from './profileNavigation.module.scss';

export default function ProfileNavigation () {
	return (
		<div className={styles.profileNavigation}>
			<div className={styles.solarSystem} id={EProfileID.PROFILE_NAVIGATION}>
				{ Array(1).fill(0).map((v, i) => <span className={styles.navOrbit} key={i} />) }
				{profileSectionReversed.map((item, index) => {
					const Planet = item?.Planet;
					return (
						<div className={styles.navDiscItem} key={index} id={item?.id}>
							{
								item?.rings &&
								Array(15).fill(0).map((v, i) => <span className={styles.spinner} key={i} />)
							}
							{
								Planet ?
									<Planet key={index} />
									: <div className={styles.background}>{item?.name}</div>
							}
						</div>
					);
				})}
			</div>
		</div>
	);
}
