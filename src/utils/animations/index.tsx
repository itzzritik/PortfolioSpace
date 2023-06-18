'use client';
import { useLayoutEffect } from 'react';

import DrawStarField from './drawStarField';
import ScrollAnimation from './scrollAnimation';

export default function Animations () {
	useLayoutEffect(() => {
		if (!window.animating) {
			window.animating = true;
			window.scrollTo(0, 0);
			DrawStarField();
			ScrollAnimation();
		}
	}, []);
	return null;
}
