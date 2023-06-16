import { RefObject } from 'react';

export const isClient = typeof window !== 'undefined';
export const dom = isClient ? window : undefined;

export const getCssProperty = (property: string, element: Element) => {
	return isClient ? getComputedStyle(element?.current || document.documentElement).getPropertyValue(property) : '';
};

export const getCssPropertyPx = (property: string, element: Element) => {
	return parseInt(getCssProperty(property, element).replace(/px/g, ''));
};

export const getCssPropertyVh = (property: string, element: Element) => {
	const height = parseInt(getCssProperty(property, element).replace(/vh/g, ''));
	return [(dom?.innerHeight ?? 0) * height / 100, height];
};

export const getCssPropertyVw = (property: string, element: Element) => {
	const width = parseInt(getCssProperty(property, element).replace(/vw/g, ''));
	return [(dom?.innerWidth ?? 0) * width / 100, width];
};

export const setCssProperty = (property: string, value: string, element: Element) => {
	return isClient ? (element?.current || document.documentElement).style.setProperty(property, value) : '';
};

type Element = RefObject<HTMLElement>
