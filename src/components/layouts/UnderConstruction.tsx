import { useLottie } from "lottie-react";

import AnimUnderConstruction from "#assets/animations/UnderConstruction.json";

import styles from "./underConstruction.module.scss";

export default function UnderConstruction(props: IUnderConstructionProps) {
	const { className, message } = props;

	const { View: LottieView } = useLottie({
		className: styles.animation,
		animationData: AnimUnderConstruction,
	});

	return (
		<div className={`${styles.underConstruction} ${className ? className : ""}`}>
			{LottieView}
			<h1>Under Construction!</h1>
			<p>{message ? message : "This page is under development!"}</p>
		</div>
	);
}

interface IUnderConstructionProps {
	className?: string;
	message?: string;
}
