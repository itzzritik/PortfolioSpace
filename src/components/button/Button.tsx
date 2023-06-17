import { ReactElement } from 'react';

import ProgressBar from '#components/layouts/ProgressBar';

import styles from './button.module.scss';

export default function Button (props: ButtonProps) {
	const { className, dark, Icon, image, label = '', tooltip, back, link, reverse, newTab, onClick, stopPropagation } = props;
	const performClick = (e) => {
		if (stopPropagation) e.stopPropagation();
		if (link) {
			return newTab ? window.open(link, '_blank') : '';
		}
		if (onClick) {
			return onClick();
		}
	};
	const IconComponent = Icon ? <Icon className={styles.icon} /> : image ?
		<span className={styles.image} style={{ backgroundImage: `url(${image})` }} /> : '';

	let buttonClass = styles.button;
	className && (buttonClass += ` ${className}`);
	dark && (buttonClass += ` ${styles.dark}`);
	(Icon || image) && (buttonClass += ` ${styles.icon}`);
	back && (buttonClass += ` ${styles.back}`);
	link && (buttonClass += ` ${styles.link}`);
	label && (buttonClass += ` ${styles.label}`);

	return (
		<div className={buttonClass} title={tooltip ? tooltip : label} onClick={performClick}>
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
	Icon: ReactElement;
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
