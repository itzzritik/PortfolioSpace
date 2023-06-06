'use client';

import { useEffect } from 'react';

import clsx from 'clsx';

import DrawStarField from './DrawStarField';
import styles from './starfield.module.scss';

export default function StarField (props: IStarFieldProps) {
	const { className } = props;
	const classX = clsx(styles.starField, className);

	useEffect(() => {
		DrawStarField();
	}, []);

	return <canvas id='starfieldCanvas' className={classX} />;
}

interface IStarFieldProps {
	className?: string;
}
