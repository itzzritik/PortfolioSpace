import { ELandingHeroID, ELandingID } from '#data/constants/ReactID';

const { CONTAINER, OVERLAY } = ELandingID;
const { HERO, GREETING, GREETING_OVERLAY, INTRO, INTRO_OVERLAY } = ELandingHeroID;

let AllElementsSelected = false;

const part1Fraction = 0.3;
const circleOverlay = false;
const Landing: IElements = {
	Container: null,
	Overlay: null,
	Hero: null,
	Greeting: null,
	GreetingOverlay: null,
	Intro: null,
	IntroOverlay: null,
};

const selectElements = () => {
	if (Object.values(Landing).every((a) => a !== null)) return AllElementsSelected = true;

	Landing.Container = document.getElementById(CONTAINER);
	Landing.Overlay = document.getElementById(OVERLAY);
	Landing.Hero = document.getElementById(HERO);
	Landing.Greeting = document.getElementById(GREETING);
	Landing.GreetingOverlay = document.getElementById(GREETING_OVERLAY);
	Landing.Intro = document.getElementById(INTRO);
	Landing.IntroOverlay = document.getElementById(INTRO_OVERLAY);
};

const OverlayAnimation = (scrollPart1: number) => {
	const overlayIndex = scrollPart1 * 100;

	Landing.Overlay?.style?.setProperty('clip-path',
		circleOverlay
			? `circle(${150 - overlayIndex}% at 90px 70px)`
			: `polygon(100% 0, 100% 100%, ${overlayIndex - 20}% 100%, ${overlayIndex - 5}% 50%, ${overlayIndex - 20}% 0)`,
	);
};

const translate = (elementWidth: number, scrollPart1: number) =>
	(Landing.Hero?.clientWidth ?? 0 - elementWidth) * Math.min(scrollPart1, 1);
const HeroAnimation = (scrollPart1: number) => {
	const GreetingX = `translate3d(-${translate(Landing.Greeting?.clientWidth ?? 0, scrollPart1)}px, 0, 0)`;
	Landing.Greeting?.style?.setProperty('transform', GreetingX);
	Landing.GreetingOverlay?.style?.setProperty('transform', GreetingX);

	const IntroX = `translate3d(-${translate(Landing.Intro?.clientWidth ?? 0, scrollPart1)}px, 0, 0)`;
	Landing.Intro?.style?.setProperty('transform', IntroX);
	Landing.IntroOverlay?.style?.setProperty('transform', IntroX);
};

export default function LandingAnimation () {
	console.time('LandingAnimation');
	if (!AllElementsSelected) return selectElements();

	const part1Height = (Landing.Container?.clientHeight ?? 0 - window.innerHeight) * part1Fraction;
	const scrollPart1 = Math.max(window.scrollY / part1Height, 0);

	OverlayAnimation(scrollPart1);
	HeroAnimation(scrollPart1);
	console.timeEnd('LandingAnimation');
}

interface IElements {
	[key: string]: HTMLElement | null;
}
