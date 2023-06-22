import clsx from 'clsx';

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

interface IExpertiseProps {
	className?: string;
}
