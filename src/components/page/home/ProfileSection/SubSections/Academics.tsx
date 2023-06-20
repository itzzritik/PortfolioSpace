import clsx from 'clsx';

import styles from './academics.module.scss';

export default function Academics (props: IAcademicsProps) {
	const { className } = props;

	const academicsClass = clsx(
		styles.academics,
		className,
	);

	return (
		<div className={academicsClass}>
			<h1>Academics</h1>
		</div>
	);
}

interface IAcademicsProps {
	className?: string;
}
