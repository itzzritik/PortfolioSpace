import { profileSectionReversed } from "#data/constants/Profile";
import { EProfileID } from "#data/constants/ReactID";
import type { IElements } from "#data/types/common";

const { PROFILE, PROFILE_SCROLL, PROFILE_NAVIGATION, INTRODUCTION_HELLO } = EProfileID;

let AllElementsSelected = false;
const Profile: IElements = {
	Profile: null,
	ProfileScroll: null,
	ProfileNavigation: null,
	IntroHello: null,
};

const selectElements = () => {
	if (Object.values(Profile).every((element) => element !== null)) {
		AllElementsSelected = true;
		return true;
	}

	Profile.Profile = document.getElementById(PROFILE);
	Profile.ProfileScroll = document.getElementById(PROFILE_SCROLL);
	Profile.ProfileNavigation = document.getElementById(PROFILE_NAVIGATION);

	Profile.IntroHello = document.getElementById(INTRODUCTION_HELLO);
};

const ScrollAnimation = (scrollPercent: number) => {
	Profile.ProfileScroll?.style.setProperty("width", `${scrollPercent}%`);
};
const IntroductionAnimation = (scrollPercent: number) => {
	Profile.IntroHello?.style.setProperty("stroke-dashoffset", scrollPercent >= 50 ? "0" : "3330");
	Profile.IntroHello?.style.setProperty("transition-duration", scrollPercent >= 50 ? "1.2s" : "0.7s");
};

const midAngle = 540;
const diffAngleScale = 100;
const scaleMin = 0.05;
const orbitDistance = { right: 2.38, centre: 0.78, left: 0.475 };
const sectionLength = profileSectionReversed.length;
const angleBetweenItem = 360 / sectionLength;
const NavigationAnimation = (scrollPercent: number) => {
	let totalAngle = 180 + angleBetweenItem * (scrollPercent / 100);

	profileSectionReversed.forEach((item) => {
		document.getElementById(item?.id)?.style.setProperty(
			"transform",
			`rotate(-${totalAngle}deg)
			translate(${(Profile.ProfileNavigation?.clientWidth ?? 0) / orbitDistance[item.orbit]}px)
			rotate(${totalAngle}deg)
			scale(${Math.max(scaleMin, 1 - Math.abs(totalAngle - midAngle) / diffAngleScale)})`,
		);

		totalAngle += angleBetweenItem;
	});
};

export default function ProfileAnimation() {
	if (!AllElementsSelected) return selectElements();

	const profileRect = Profile.Profile?.getBoundingClientRect();
	if (!profileRect) return;

	const profileScroll = ((window.innerHeight - profileRect?.top) * 100) / profileRect?.height;
	const profileSectionScroll = ((window.innerHeight - profileRect?.top) * 100) / window.innerHeight;

	ScrollAnimation(profileScroll);
	NavigationAnimation(profileSectionScroll);

	if (profileSectionScroll > 0 && profileSectionScroll < 200) IntroductionAnimation(profileSectionScroll);
}
