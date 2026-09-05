import Scroller from "#components/layouts/Scroller";
import { profileSections } from "#data/constants/Profile";
import { EProfileID } from "#data/constants/ReactID";

import ProfileNavigation from "./ProfileNavigation";
import styles from "./profileSection.module.scss";

const { PROFILE, PROFILE_SCROLL } = EProfileID;

export default function ProfileSection() {
	return (
		<div className={styles.profileSection} id={PROFILE}>
			<Scroller id={PROFILE_SCROLL} />
			<ProfileNavigation />
			<div className={styles.sections}>
				{profileSections.map(({ View, id }) => (
					<div className={styles.sectionItem} data-section="" key={id}>
						<View />
					</div>
				))}
			</div>
		</div>
	);
}
