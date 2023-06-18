import { ELandingHeroID, ELandingID } from '#data/constants/ReactID';

const { CONTAINER, OVERLAY } = ELandingID;
const {
	HERO, HERO_OVERLAY,
	GREETING, GREETING_OVERLAY,
	INTRO, INTRO_OVERLAY,
	ROLE, ROLE_OVERLAY,
	SEPARATOR, SEPARATOR_OVERLAY,
	BIO_1, BIO_OVERLAY_1,
	BIO_2, BIO_OVERLAY_2,
} = ELandingHeroID;

let AllElementsSelected = false;

const part1Fraction = 0.3;
const useCircleOverlay = false;
const Landing: IElements = {
	Container: null,
	Overlay: null,
	Hero: null,
	HeroOverlay: null,
	Greeting: null,
	GreetingOverlay: null,
	Intro: null,
	IntroOverlay: null,
	Role: null,
	RoleOverlay: null,
	Separator: null,
	SeparatorOverlay: null,
	Bio1: null,
	BioOverlay1: null,
	Bio2: null,
	BioOverlay2: null,
};

const selectElements = () => {
	if (Object.values(Landing).every((a) => a !== null)) return AllElementsSelected = true;

	Landing.Container = document.getElementById(CONTAINER);
	Landing.Overlay = document.getElementById(OVERLAY);
	Landing.Hero = document.getElementById(HERO);
	Landing.HeroOverlay = document.getElementById(HERO_OVERLAY);
	Landing.Greeting = document.getElementById(GREETING);
	Landing.GreetingOverlay = document.getElementById(GREETING_OVERLAY);
	Landing.Intro = document.getElementById(INTRO);
	Landing.IntroOverlay = document.getElementById(INTRO_OVERLAY);
	Landing.Role = document.getElementById(ROLE);
	Landing.RoleOverlay = document.getElementById(ROLE_OVERLAY);
	Landing.Separator = document.getElementById(SEPARATOR);
	Landing.SeparatorOverlay = document.getElementById(SEPARATOR_OVERLAY);
	Landing.Bio1 = document.getElementById(BIO_1);
	Landing.BioOverlay1 = document.getElementById(BIO_OVERLAY_1);
	Landing.Bio2 = document.getElementById(BIO_2);
	Landing.BioOverlay2 = document.getElementById(BIO_OVERLAY_2);
};

const OverlayAnimation = (scrollPart1: number) => {
	const overlayIndex = scrollPart1 * 100;
	Landing.Overlay?.style?.setProperty('clip-path',
		useCircleOverlay
			? `circle(${150 - overlayIndex}% at 90px 70px)`
			: `polygon(100% 0, 100% 100%, ${overlayIndex - 20}% 100%, ${overlayIndex - 5}% 50%, ${overlayIndex - 20}% 0)`,
	);
};

const translate = (elementWidth: number, scrollPart1: number) => {
	return ((Landing.Hero?.clientWidth ?? 0) - elementWidth) * Math.min(scrollPart1, 1);
};
const HeroPart1Animation = (scrollPart1: number) => {
	const GreetingX = `translate3d(-${translate((Landing.Greeting?.clientWidth ?? 0), scrollPart1)}px, 0, 0)`;
	Landing.Greeting?.style?.setProperty('transform', GreetingX);
	Landing.GreetingOverlay?.style?.setProperty('transform', GreetingX);

	const IntroX = `translate3d(-${translate((Landing.Intro?.clientWidth ?? 0), scrollPart1)}px, 0, 0)`;
	Landing.Intro?.style?.setProperty('transform', IntroX);
	Landing.IntroOverlay?.style?.setProperty('transform', IntroX);

	const RoleX = `translate3d(-${translate((Landing.Role?.clientWidth ?? 0) * -0.21, scrollPart1)}px, 0, 0)`;
	Landing.Role?.style?.setProperty('transform', RoleX);
	Landing.RoleOverlay?.style?.setProperty('transform', RoleX);

	Landing.Separator?.style?.setProperty('transform', `translate3d(${Math.min((scrollPart1 - 1.5), 0) * 100}%, 0, 0)`);
	Landing.SeparatorOverlay?.style?.setProperty('transform', `translate3d(${Math.min((scrollPart1 - 1.5), 0) * 100}%, 0, 0)`);
};
const HeroPart2Animation = (scrollPart2: number) => {
	const HeroScale = `scale(${1 - Math.min(scrollPart2 * 0.35, 0.3)}) translate3d(${scrollPart2 / 2}vw, 0, 0)`;
	Landing.Hero?.style?.setProperty('transform', HeroScale);
	Landing.HeroOverlay?.style?.setProperty('transform', HeroScale);

	const bioClipValue1 = scrollPart2 * 200;
	Landing.Bio1?.style?.setProperty('clip-path', `polygon(0 0, ${bioClipValue1}% 0, ${bioClipValue1}% 100%, 0 100%)`);
	Landing.BioOverlay1?.style?.setProperty('clip-path', `polygon(0 0, ${bioClipValue1}% 0, ${bioClipValue1}% 100%, 0 100%)`);

	const bioClipValue2 = bioClipValue1 >= 100 ? ((scrollPart2 * 2.2) - 1) * 100 : 0;
	Landing.Bio2?.style?.setProperty('clip-path', `polygon(0 0, ${bioClipValue2}% 0, ${bioClipValue2}% 100%, 0 100%)`);
	Landing.BioOverlay2?.style?.setProperty('clip-path', `polygon(0 0, ${bioClipValue2}% 0, ${bioClipValue2}% 100%, 0 100%)`);
};

export default function LandingAnimation () {
	if (!AllElementsSelected) return selectElements();

	const scrollAvailable = (Landing.Container?.clientHeight ?? 0) - window.innerHeight;
	const part1Height = scrollAvailable * part1Fraction;
	const scrollPart1 = Math.max(window.scrollY / part1Height, 0);
	const scrollPart2 = Math.max((window.scrollY - part1Height) / (scrollAvailable - part1Height), 0);

	OverlayAnimation(scrollPart1);
	HeroPart1Animation(scrollPart1);
	HeroPart2Animation(scrollPart2);
}

interface IElements {
	[key: string]: HTMLElement | null;
}
