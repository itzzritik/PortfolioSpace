import { ELandingHeroID, ELandingID } from "#data/constants/ReactID";
import type { IElements } from "#data/types/common";

const { CONTAINER, OVERLAY } = ELandingID;
const { HERO, HERO_OVERLAY, GREETING, GREETING_OVERLAY, INTRO, INTRO_OVERLAY, ROLE, ROLE_OVERLAY, SEPARATOR, SEPARATOR_OVERLAY, BIO_1, BIO_OVERLAY_1, BIO_2, BIO_OVERLAY_2 } =
	ELandingHeroID;

let ready = false;

const part1Fraction = 0.3;
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
	ready = Object.values(Landing).every(Boolean);
};

/**
 * Horizontal position (in % of the viewport) of the wipe's dark/white boundary at a given height.
 * The white overlay is clipped to a chevron: 20% behind the wipe index at the top and bottom edges, 5% behind it at mid-height.
 */
export const wipeEdge = (overlayIndex: number, yFraction: number) => overlayIndex - 20 + 15 * (1 - Math.abs(2 * yFraction - 1));

const OverlayAnimation = (scrollPart1: number) => {
	const overlayIndex = scrollPart1 * 100;
	Landing.Overlay?.style?.setProperty("clip-path", `polygon(100% 0, 100% 100%, ${overlayIndex - 20}% 100%, ${overlayIndex - 5}% 50%, ${overlayIndex - 20}% 0)`);
};

/** Slides a line from where it sits to the hero's left edge; `overshoot` carries it further, off the stage. */
const slide = (element: HTMLElement | null, scrollPart1: number, overshoot = 0) =>
	`translate3d(-${((element?.offsetLeft ?? 0) + overshoot) * Math.min(scrollPart1, 1)}px, 0, 0)`;

const HeroPart1Animation = (scrollPart1: number) => {
	const GreetingX = slide(Landing.Greeting, scrollPart1);
	Landing.Greeting?.style?.setProperty("transform", GreetingX);
	Landing.GreetingOverlay?.style?.setProperty("transform", GreetingX);

	const IntroX = slide(Landing.Intro, scrollPart1);
	Landing.Intro?.style?.setProperty("transform", IntroX);
	Landing.IntroOverlay?.style?.setProperty("transform", IntroX);

	const RoleX = slide(Landing.Role, scrollPart1, (Landing.Role?.clientWidth ?? 0) * 1.21);
	Landing.Role?.style?.setProperty("transform", RoleX);
	Landing.RoleOverlay?.style?.setProperty("transform", RoleX);

	Landing.Separator?.style?.setProperty("transform", `translate3d(${Math.min(scrollPart1 - 1.5, 0) * 100}%, 0, 0)`);
	Landing.SeparatorOverlay?.style?.setProperty("transform", `translate3d(${Math.min(scrollPart1 - 1.5, 0) * 100}%, 0, 0)`);
};
const HeroPart2Animation = (scrollPart2: number) => {
	const HeroScale = `scale(${1 - Math.min(scrollPart2 * 0.35, 0.3)}) translate3d(${scrollPart2 / 2}vw, 0, 0)`;
	Landing.Hero?.style?.setProperty("transform", HeroScale);
	Landing.HeroOverlay?.style?.setProperty("transform", HeroScale);

	const bioClipValue1 = scrollPart2 * 200;
	Landing.Bio1?.style?.setProperty("clip-path", `polygon(0 0, ${bioClipValue1}% 0, ${bioClipValue1}% 100%, 0 100%)`);
	Landing.BioOverlay1?.style?.setProperty("clip-path", `polygon(0 0, ${bioClipValue1}% 0, ${bioClipValue1}% 100%, 0 100%)`);

	const bioClipValue2 = bioClipValue1 >= 100 ? (scrollPart2 * 2.2 - 1) * 100 : 0;
	Landing.Bio2?.style?.setProperty("clip-path", `polygon(0 0, ${bioClipValue2}% 0, ${bioClipValue2}% 100%, 0 100%)`);
	Landing.BioOverlay2?.style?.setProperty("clip-path", `polygon(0 0, ${bioClipValue2}% 0, ${bioClipValue2}% 100%, 0 100%)`);
};

/** Drives the landing wipe; returns how far through the wipe (part 1) the page is, 1 = complete. */
export default function LandingAnimation() {
	if (!ready) selectElements();
	if (!ready) return 0;

	const scrollAvailable = (Landing.Container?.clientHeight ?? 0) - window.innerHeight;
	const part1Height = scrollAvailable * part1Fraction;
	const scrollPart1 = Math.max(window.scrollY / part1Height, 0);
	const scrollPart2 = Math.max((window.scrollY - part1Height) / (scrollAvailable - part1Height), 0);

	OverlayAnimation(scrollPart1);
	HeroPart1Animation(scrollPart1);
	HeroPart2Animation(scrollPart2);

	return scrollPart1;
}
