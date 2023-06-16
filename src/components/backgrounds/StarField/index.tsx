import clsx from 'clsx';

import styles from './starfield.module.scss';

export default function StarField (props: IStarFieldProps) {
	const { className } = props;
	const classX = clsx(styles.starField, className);

	return (
		<canvas id='starfieldCanvas' className={classX} />
	);
}

interface IStarFieldProps {
	className?: string;
}
