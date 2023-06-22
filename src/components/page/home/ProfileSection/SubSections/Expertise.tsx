'use client';

import { useEffect } from 'react';

import clsx from 'clsx';
import { useLottie } from 'lottie-react';

import DancingNeptune from '#assets/animations/space/DancingNeptune.json';

import styles from './expertise.module.scss';

export default function Expertise (props: IExpertiseProps) {
	const { className } = props;

	const expertiseClass = clsx(
		styles.expertise,
		className,
	);

	return (
		<div className={expertiseClass}>
			<h1>Expertise</h1>
		</div>
	);
}

export const ExpertisePlanet = () => {
	const { View, setSpeed } = useLottie({
		className: styles.expertisePlanet,
		animationData: DancingNeptune,
	});

	useEffect(() => setSpeed(0.8), [setSpeed]);

	return View;
};

interface IExpertiseProps {
	className?: string;
}
