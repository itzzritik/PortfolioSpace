import { EHeaderID } from "#data/constants/ReactID";
import type { IElements } from "#data/types/common";

import { wipeEdge } from "./landingAnim";

const { LOGO, HAMBURGER } = EHeaderID;

const Header: IElements = {
	Logo: null,
	Hamburger: null,
};

/** True once the dark side of the landing wipe has passed the element's right edge. */
const isOnDark = (element: HTMLElement, overlayIndex: number) => {
	const { top, bottom, right } = element.getBoundingClientRect();
	return wipeEdge(overlayIndex, (top + bottom) / 2 / window.innerHeight) >= (right / window.innerWidth) * 100;
};

export default function HeaderAnimation(scrollPart1: number) {
	Header.Logo ??= document.getElementById(LOGO);
	Header.Hamburger ??= document.getElementById(HAMBURGER);

	const overlayIndex = scrollPart1 * 100;
	for (const element of [Header.Logo, Header.Hamburger]) {
		element?.style.setProperty("--displayColor", isOnDark(element, overlayIndex) ? "white" : "black");
	}
}
