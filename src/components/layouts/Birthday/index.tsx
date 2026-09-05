import clsx from "clsx";
import { type CSSProperties, type MouseEvent, useState } from "react";

import { EStartFieldSpeed } from "#data/types/common";
import { calculateAge } from "#utils/function/general";

import AgeCard from "./AgeCard";
import styles from "./birthday.module.scss";

export default function Birthday(props: IBirthdayProps) {
	const { className, dob, label } = props;
	const [pointer, setPointer] = useState<{ x: number; y: number }>();

	const follow = (event: MouseEvent) => setPointer({ x: event.clientX, y: event.clientY });

	return (
		<>
			<span
				className={clsx(styles.age, className)}
				onMouseEnter={(event) => {
					window.starFieldSpeed = EStartFieldSpeed.MEDIUM;
					follow(event);
				}}
				onMouseLeave={() => {
					window.starFieldSpeed = EStartFieldSpeed.SLOW;
					setPointer(undefined);
				}}
				onMouseMove={follow}>
				{calculateAge(dob)?.years}
				{label}
			</span>
			{pointer && (
				<div className={styles.birthdayModal} style={{ "--x": `${pointer.x}px`, "--y": `${pointer.y}px` } as CSSProperties}>
					<AgeCard dob={dob} />
				</div>
			)}
		</>
	);
}

interface IBirthdayProps {
	className?: string;
	dob: string;
	label?: string;
}
