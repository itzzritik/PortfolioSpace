import { Lottie } from "lottie-react";

import AnimUnderConstruction from "#assets/animations/UnderConstruction.json";

import styles from "./underConstruction.module.scss";

export default function UnderConstruction(props: IUnderConstructionProps) {
	const { className, message } = props;

	return (
		<div className={`${styles.underConstruction} ${className ? className : ""}`}>
			<Lottie autoplay className={styles.animation} loop src={AnimUnderConstruction} />
			<h1>Under Construction!</h1>
			<p>{message ? message : "This page is under development!"}</p>
		</div>
	);
}

interface IUnderConstructionProps {
	className?: string;
	message?: string;
}
