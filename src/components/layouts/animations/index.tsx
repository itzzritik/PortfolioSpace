'use client';
import { useLayoutEffect } from 'react';

import DrawStarField from './drawStarField';

const RunAnimations = () => {
	DrawStarField();
};
export default function Animations () {
	useLayoutEffect(() => {
		if (!window.animating) {
			window.animating = true;
			RunAnimations();
		}
	}, []);
	return null;
}
