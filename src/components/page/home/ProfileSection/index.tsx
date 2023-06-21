import Scroller from '#components/layouts/Scroller';
import { profileSections } from '#data/constants/Profile';
import { EProfileID } from '#data/constants/ReactID';

import ProfileNavigation from './ProfileNavigation';
import styles from './profileSection.module.scss';

const { PROFILE } = EProfileID;

export default function ProfileSection () {
	return (
		<div className={styles.profileSection} id={PROFILE}>
			<Scroller />
			<ProfileNavigation />
			<div className={styles.sections}>
				{
					profileSections.map(({ view: Section }, i) => (
						<div className={styles.sectionItem} key={i}>
							<Section />
						</div>
					))
				}
			</div>
		</div>
	);
}
