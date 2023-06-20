import ProgressBar from '#components/layouts/ProgressBar';

import styles from './scroller.module.scss';

export default function Scroller (props: IScrollerProps) {
	const { progress, dark } = props;

	return (
		<div className={styles.scroller}>
			<ProgressBar className={styles.progressBar} progress={progress} dark={dark} />
		</div>
	);
}

interface IScrollerProps {
	progress?: number;
	dark?: boolean;
}
