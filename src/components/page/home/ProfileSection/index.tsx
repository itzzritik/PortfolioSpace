import Scroller from '#components/layouts/Scroller';

import Academics from './SubSections/Academics';
import Introduction from './SubSections/Introduction';
import Languages from './SubSections/Languages';
import Skills from './SubSections/Skills';
import styles from './profileSection.module.scss';

export default function ProfileSection () {
	const sections = [
		{ name: 'intro', view: Introduction, orbit: 'right', rings: false },
		{ name: 'academics', view: Academics, orbit: 'left', rings: false },
		{ name: 'skills', view: Skills, orbit: 'center', rings: true },
		{ name: 'languages', view: Languages, orbit: 'right', rings: false },
	];

	return (
		<div className={styles.profileSection}>
			<Scroller />
			<div className={styles.sections}>
				{
					sections.map(({ view: Section }, i) => (
						<div className={styles.sectionItem} key={i}>
							<Section />
						</div>
					))
				}
			</div>
		</div>
	);
}
