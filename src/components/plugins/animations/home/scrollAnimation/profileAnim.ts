import { profileSectionReversed } from "#data/constants/Profile";
import { EProfileID } from "#data/constants/ReactID";
import type { IElements } from "#data/types/common";

const { PROFILE, PROFILE_SCROLL, PROFILE_NAVIGATION, INTRODUCTION_HELLO } = EProfileID;

let ready = false;
let sections: HTMLElement[] = [];
let planets: (HTMLElement | null)[] = [];
const Profile: IElements = {
	Profile: null,
	ProfileScroll: null,
	ProfileNavigation: null,
	IntroHello: null,
};

const selectElements = () => {
	Profile.Profile = document.getElementById(PROFILE);
	Profile.ProfileScroll = document.getElementById(PROFILE_SCROLL);
	Profile.ProfileNavigation = document.getElementById(PROFILE_NAVIGATION);
	Profile.IntroHello = document.getElementById(INTRODUCTION_HELLO);
	sections = Array.from(Profile.Profile?.querySelectorAll<HTMLElement>("[data-section]") ?? []);
	planets = profileSectionReversed.map(({ id }) => document.getElementById(id));
	ready = Object.values(Profile).every(Boolean) && sections.length > 0;
};

/** Sections scrolled through so far: 1 = the first fills the viewport, 2 = the second does, … Works for sections of any height. */
const sectionsScrolled = () =>
	sections.reduce((sum, section) => {
		const { top, height } = section.getBoundingClientRect();
		return sum + Math.min(Math.max((window.innerHeight - top) / height, 0), 1);
	}, 0);

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
const orbitRatio = 2.38; // orbit radius = system width / orbitRatio, mirrored in profileNavigation.module.scss
const angleBetweenItem = 360 / profileSectionReversed.length;
const NavigationAnimation = (scrollPercent: number) => {
	const radius = (Profile.ProfileNavigation?.clientWidth ?? 0) / orbitRatio;
	let totalAngle = 180 + angleBetweenItem * (scrollPercent / 100);

	for (const planet of planets) {
		const scale = Math.max(scaleMin, 1 - Math.abs(totalAngle - midAngle) / diffAngleScale);
		planet?.style.setProperty("transform", `rotate(-${totalAngle}deg) translate(${radius}px) rotate(${totalAngle}deg) scale(${scale})`);
		totalAngle += angleBetweenItem;
	}
};

export default function ProfileAnimation() {
	if (!ready) selectElements();
	if (!ready) return;

	const profileRect = Profile.Profile?.getBoundingClientRect();
	if (!profileRect) return;

	const profileScroll = ((window.innerHeight - profileRect.top) * 100) / profileRect.height;
	const sectionScroll = sectionsScrolled() * 100;

	ScrollAnimation(profileScroll);
	NavigationAnimation(sectionScroll);

	if (sectionScroll > 0 && sectionScroll < 200) IntroductionAnimation(sectionScroll);
}
