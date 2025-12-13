import clsx from "clsx";

import styles from "./progressbar.module.scss";

export default function ProgressBar(props: ProgressBarProps) {
	const { className, progress, dark } = props;

	const progressClass = clsx(styles.progressBar, className, dark && styles.dark);

	return (
		<div className={progressClass}>
			<span className={styles.progress} style={{ width: `${progress && Math.min(Math.max(progress, 0), 100)}%` }} />
		</div>
	);
}

interface ProgressBarProps {
	className?: string;
	progress?: number;
	dark?: boolean;
}
