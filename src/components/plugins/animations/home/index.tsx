'use client';
import { useLayoutEffect } from 'react';

import { EStartFieldSpeed } from '#data/types/common.d';

import DrawStarField from './drawStarField';
import ScrollAnimation from './scrollAnimation';

export default function HomeAnimations () {
	useLayoutEffect(() => {
		if (!window.animating) {
			window.animating = true;
			window.starFieldSpeed = EStartFieldSpeed.SLOW;

			DrawStarField();
			ScrollAnimation();
		}
	}, []);
	return null;
}
