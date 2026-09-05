import Expertise, { ExpertisePlanet } from "#components/page/home/ProfileSection/SubSections/Expertise";
import Introduction, { IntroductionPlanet } from "#components/page/home/ProfileSection/SubSections/Introduction";
import Languages, { LanguagesPlanet } from "#components/page/home/ProfileSection/SubSections/Languages";
import Skills, { SkillsPlanet } from "#components/page/home/ProfileSection/SubSections/Skills";
import type { IProfileSection } from "#data/types/profile";

import { EProfileNavigationID } from "./ReactID";

const { INTRODUCTION, EXPERTISE, SKILLS, LANGUAGES } = EProfileNavigationID;

export const profileSections: IProfileSection[] = [
	{ View: Introduction, Planet: IntroductionPlanet, id: INTRODUCTION },
	{ View: Expertise, Planet: ExpertisePlanet, id: EXPERTISE },
	{ View: Skills, Planet: SkillsPlanet, id: SKILLS },
	{ View: Languages, Planet: LanguagesPlanet, id: LANGUAGES },
];
export const profileSectionReversed = [...profileSections].reverse();
