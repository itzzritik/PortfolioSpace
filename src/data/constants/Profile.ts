import Academics from '#components/page/home/ProfileSection/SubSections/Academics';
import Introduction from '#components/page/home/ProfileSection/SubSections/Introduction';
import Languages from '#components/page/home/ProfileSection/SubSections/Languages';
import Skills from '#components/page/home/ProfileSection/SubSections/Skills';
import { EOrbit, IProfileSection } from '#data/types/profile.d';

import { EProfileNavigationID } from './ReactID';

const { INTRODUCTION, ACADEMICS, SKILLS, LANGUAGES } = EProfileNavigationID;

export const profileSections: IProfileSection[] = [
	{ name: 'intro', view: Introduction, id: INTRODUCTION, orbit: EOrbit.RIGHT, rings: false },
	{ name: 'academics', view: Academics, id: ACADEMICS, orbit: EOrbit.LEFT, rings: false },
	{ name: 'skills', view: Skills, id: SKILLS, orbit: EOrbit.CENTRE, rings: true },
	{ name: 'languages', view: Languages, id: LANGUAGES, orbit: EOrbit.RIGHT, rings: false },
];
export const profileSectionReversed = [...profileSections].reverse();
