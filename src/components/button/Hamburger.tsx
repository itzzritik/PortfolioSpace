/* eslint-disable max-len */

import clsx from 'clsx';

import styles from './hamburger.module.scss';

export default function Hamburger (props: HamburgerProps) {
	const { id, active } = props;

	const HamburgerClass = clsx(
		styles.hamburger,
		active ? styles.active : styles.inactive,
	);

	return (
		<svg className={HamburgerClass} id={id} viewBox='0 0 57 57'>
			<path className={styles.top} d='M47.4998 21.9001L8.00055 21.9001C8.00055 21.9001 6.01245 21.9231 5.99981 24.9001C5.98718 27.8772 8.00055 27.9001 8.00055 27.9001L27.9998 27.9001L27.9998 20.9001' />
			<path className={styles.bottom} d='M8.49976 33.9001L47.999 33.9001C47.999 33.9001 49.9998 33.8901 49.9998 30.9001C49.9998 27.9102 47.999 27.9001 47.999 27.9001L27.9998 27.9001L27.9998 34.9001' />
		</svg>
	);
}

interface HamburgerProps {
	id?: string;
	active: boolean;
}
