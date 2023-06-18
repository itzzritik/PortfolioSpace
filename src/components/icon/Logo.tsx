import clsx from 'clsx';

import R from '#assets/img/logo/r.svg';
import S from '#assets/img/logo/s.svg';

import styles from './logo.module.scss';

export default function logo (props: LogoProps) {
	const { id, className, outlined } = props;

	const logoClass = clsx(
		styles.logo,
		className,
		outlined && styles.outlined,
	);

	return (
		<div className={logoClass} id={id} title='Ritik Srivastava'>
			<R className={styles.ritik} />
			<S className={styles.srivastava} />
		</div>
	);
}

interface LogoProps {
	id?: string;
	className?: string;
	outlined?: boolean;
}
