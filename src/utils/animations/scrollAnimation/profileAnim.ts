import { EProfileID } from '#data/constants/ReactID';
import { IElements } from '#data/types/common';

const { PROFILE, INTRODUCTION_HELLO } = EProfileID;

const Profile: IElements = {
	Profile: null,
	IntroHello: null,
};

const IntroductionAnimation = (scrollPercent: number) => {
	console.log(scrollPercent);
	Profile.IntroHello?.style.setProperty('stroke-dashoffset', scrollPercent >= 60 ? '0' : '3330');
	Profile.IntroHello?.style.setProperty('transition-duration', scrollPercent >= 60 ? '1.2s' : '0.7s');
};

export default function ProfileAnimation () {
	if (Object.values(Profile).some((element) => element === null)) {
		Profile.Profile = document.getElementById(PROFILE);
		Profile.IntroHello = document.getElementById(INTRODUCTION_HELLO);
	}

	const profileRect = Profile.Profile?.getBoundingClientRect();
	if (!profileRect) return;

	const profileScroll = (window.innerHeight - profileRect?.top) * 100 / window.innerHeight;

	if (profileScroll > 0 && profileScroll < 200)
		IntroductionAnimation(profileScroll);
}
