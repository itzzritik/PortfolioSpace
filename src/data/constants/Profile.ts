import Expertise from '#components/page/home/ProfileSection/SubSections/Expertise';
import Introduction from '#components/page/home/ProfileSection/SubSections/Introduction';
import Languages from '#components/page/home/ProfileSection/SubSections/Languages';
import Skills from '#components/page/home/ProfileSection/SubSections/Skills';
import { EOrbit, IProfileSection } from '#data/types/profile.d';

import { EProfileNavigationID } from './ReactID';

const { INTRODUCTION, EXPERTISE, SKILLS, LANGUAGES } = EProfileNavigationID;

export const profileSections: IProfileSection[] = [
	{ name: 'intro', view: Introduction, id: INTRODUCTION, orbit: EOrbit.RIGHT, rings: false },
	{ name: 'expertise', view: Expertise, id: EXPERTISE, orbit: EOrbit.RIGHT, rings: false },
	{ name: 'skills', view: Skills, id: SKILLS, orbit: EOrbit.RIGHT, rings: false },
	{ name: 'languages', view: Languages, id: LANGUAGES, orbit: EOrbit.RIGHT, rings: false },
];
export const profileSectionReversed = [...profileSections].reverse();
