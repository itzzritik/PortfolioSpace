import { FC, SVGProps, SyntheticEvent } from 'react';

import clsx from 'clsx';

import ProgressBar from '#components/layouts/ProgressBar';
import { EStartFieldSpeed } from '#data/types/common.d';

import styles from './button.module.scss';

export default function Button (props: ButtonProps) {
	const { className, dark, Icon, image, label = '', tooltip, back, link, reverse, newTab, onClick, stopPropagation } = props;

	const performClick = (event: SyntheticEvent) => {
		if (stopPropagation) event.stopPropagation();

		if (link) return newTab ? window.open(link, '_blank') : '';
		if (onClick) return onClick();
	};
	const IconComponent = Icon ? <Icon className={styles.icon} /> : image ?
		<span className={styles.image} style={{ backgroundImage: `url(${image})` }} /> : '';

	const buttonClass = clsx(
		styles.button,
		className,
		dark && styles.dark,
		(Icon || image) && styles.icon,
		back && styles.back,
		link && styles.link,
		label && styles.label,
	);

	return (
		<div
			className={buttonClass}
			title={tooltip ? tooltip : label}
			onClick={performClick}
			onMouseEnter={() => {
				window.starFieldSpeed = EStartFieldSpeed.MEDIUM;
			}}
			onMouseLeave={() => {
				window.starFieldSpeed = EStartFieldSpeed.SLOW;
			}}
		>
			{back ? <span className={styles.background} /> : <ProgressBar className={styles.underline} dark={dark} />}
			{!reverse && IconComponent}
			{label && <p className={styles.label}>{label}</p>}
			{reverse && IconComponent}
		</div>
	);
}

interface ButtonProps {
	className?: string;
	dark?: boolean;
	Icon?: FC<SVGProps<SVGSVGElement>>;
	image?: string;
	label?: string;
	tooltip?: string;
	back?: boolean;
	link?: string;
	reverse?: boolean;
	newTab?: boolean;
	onClick?: () => void;
	stopPropagation?: boolean;
}
