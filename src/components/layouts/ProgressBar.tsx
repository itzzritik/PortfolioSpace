import styles from './progressbar.module.scss';

export default function ProgressBar (props: ProgressBarProps) {
	const { className, progress, dark } = props;

	let progressClass = styles.progressBar;
	className && (progressClass += ` ${className}`);
	dark && (progressClass += ` ${styles.dark}`);

	return (
		<div className={progressClass}>
			<span className={styles.progress} style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }} />
		</div>
	);
}

interface ProgressBarProps {
	className?: string;
	progress: number;
	dark?: boolean;
}
