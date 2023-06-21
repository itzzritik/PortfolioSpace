import clsx from 'clsx';

import ProgressStyles from '#components/layouts/progressbar.module.scss';

import styles from './scroller.module.scss';

export default function Scroller (props: IScrollerProps) {
	const { id } = props;
	return (
		<div className={styles.scroller}>
			<div className={clsx(ProgressStyles.progressBar, styles.progressBar)}>
				<span className={ProgressStyles.progress} id={id} />
			</div>
		</div>
	);
}

interface IScrollerProps {
	id: string;
}
