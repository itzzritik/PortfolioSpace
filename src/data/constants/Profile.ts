import Expertise, { ExpertisePlanet } from "#components/page/home/ProfileSection/SubSections/Expertise";
import Introduction, { IntroductionPlanet } from "#components/page/home/ProfileSection/SubSections/Introduction";
import Languages, { LanguagesPlanet } from "#components/page/home/ProfileSection/SubSections/Languages";
import Skills, { SkillsPlanet } from "#components/page/home/ProfileSection/SubSections/Skills";
import { EOrbit, type IProfileSection } from "#data/types/profile";

import { EProfileNavigationID } from "./ReactID";

const { INTRODUCTION, EXPERTISE, SKILLS, LANGUAGES } = EProfileNavigationID;

export const profileSections: IProfileSection[] = [
	{
		name: "intro",
		View: Introduction,
		Planet: IntroductionPlanet,
		id: INTRODUCTION,
		orbit: EOrbit.RIGHT,
		rings: false,
	},
	{
		name: "expertise",
		View: Expertise,
		Planet: ExpertisePlanet,
		id: EXPERTISE,
		orbit: EOrbit.RIGHT,
		rings: false,
	},
	{
		name: "skills",
		View: Skills,
		Planet: SkillsPlanet,
		id: SKILLS,
		orbit: EOrbit.RIGHT,
		rings: false,
	},
	{
		name: "languages",
		View: Languages,
		Planet: LanguagesPlanet,
		id: LANGUAGES,
		orbit: EOrbit.RIGHT,
		rings: false,
	},
];
export const profileSectionReversed = [...profileSections].reverse();
