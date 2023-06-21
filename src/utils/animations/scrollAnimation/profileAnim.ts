import { profileSectionReversed } from '#data/constants/Profile';
import { EProfileID, EProfileNavigationID } from '#data/constants/ReactID';
import { IElements } from '#data/types/common';

const { PROFILE, PROFILE_SCROLL, INTRODUCTION_HELLO } = EProfileID;
const { DISC, INTRODUCTION, ACADEMICS, SKILLS, LANGUAGES } = EProfileNavigationID;

let AllElementsSelected = false;
const Profile: IElements = {
	Profile: null,
	ProfileScroll: null,
	IntroHello: null,

	NavDisc: null,
	NavIntroduction: null,
	NavAcademics: null,
	NavSkills: null,
	NavLanguages: null,
};

const selectElements = () => {
	if (Object.values(Profile).every((element) => element !== null)) return AllElementsSelected = true;

	Profile.Profile = document.getElementById(PROFILE);
	Profile.ProfileScroll = document.getElementById(PROFILE_SCROLL);
	Profile.IntroHello = document.getElementById(INTRODUCTION_HELLO);

	Profile.NavDisc = document.getElementById(DISC);
	Profile.NavIntroduction = document.getElementById(INTRODUCTION);
	Profile.NavAcademics = document.getElementById(ACADEMICS);
	Profile.NavSkills = document.getElementById(SKILLS);
	Profile.NavLanguages = document.getElementById(LANGUAGES);
};

const ScrollAnimation = (scrollPercent: number) => {
	Profile.ProfileScroll?.style.setProperty('width', `${scrollPercent}%`);
};
const IntroductionAnimation = (scrollPercent: number) => {
	Profile.IntroHello?.style.setProperty('stroke-dashoffset', scrollPercent >= 60 ? '0' : '3330');
	Profile.IntroHello?.style.setProperty('transition-duration', scrollPercent >= 60 ? '1.2s' : '0.7s');
};

const midAngle = 540;
const diffAngleScale = 100;
const scaleMin = 0.05;
const orbitDistance = { right: 2.38, centre: 0.78, left: 0.475 };
const sectionLength = profileSectionReversed.length;
const NavigationAnimation = (scrollPercent: number) => {
	const angleBetweenItem = 360 / sectionLength;
	let totalAngle = 180 + (angleBetweenItem * (scrollPercent / 100));

	profileSectionReversed.map((item) => {
		const transform = `rotate(-${totalAngle}deg)
				translate(${(Profile.NavDisc?.clientWidth ?? 0) / orbitDistance[item.orbit]}px)
				rotate(${totalAngle}deg)
				scale(${Math.max(scaleMin, 1 - Math.abs(totalAngle - midAngle) / diffAngleScale)})`;

		totalAngle += angleBetweenItem;
		document.getElementById(item?.id)?.style.setProperty('transform', transform);
	});
};

export default function ProfileAnimation () {
	if (!AllElementsSelected) return selectElements();

	const profileRect = Profile.Profile?.getBoundingClientRect();
	if (!profileRect) return;

	const profileScroll = (window.innerHeight - profileRect?.top) * 100 / profileRect?.height;
	const profileSectionScroll = (window.innerHeight - profileRect?.top) * 100 / window.innerHeight;

	ScrollAnimation(profileScroll);
	NavigationAnimation(profileSectionScroll);

	if (profileSectionScroll > 0 && profileSectionScroll < 200)
		IntroductionAnimation(profileSectionScroll);
}
