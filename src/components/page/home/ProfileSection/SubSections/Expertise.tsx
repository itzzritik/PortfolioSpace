"use client";

import clsx from "clsx";
import { Lottie } from "lottie-react";

import AnimDancingNeptune from "#assets/animations/space/DancingNeptune.json";

import styles from "./expertise.module.scss";

export default function Expertise(props: IExpertiseProps) {
	const { className } = props;

	const expertiseClass = clsx(styles.expertise, className);

	return (
		<div className={expertiseClass}>
			<h1>Expertise</h1>
		</div>
	);
}

export const ExpertisePlanet = () => {
	return <Lottie autoplay className={styles.expertisePlanet} loop speed={0.8} src={AnimDancingNeptune} />;
};

interface IExpertiseProps {
	className?: string;
}
