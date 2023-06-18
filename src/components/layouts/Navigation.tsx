'use client';

import { useState } from 'react';

import clsx from 'clsx';

import { EHeaderID } from '#data/constants/ReactID';

import Hamburger from '../button/Hamburger';
import Logo from '../icon/Logo';

import styles from './navigation.module.scss';

const { LOGO, HAMBURGER } = EHeaderID;
const navLabels = ['about me', 'experience', 'projects', 'resume'];

export default function Navigation () {
	const [active, setActive] = useState(false);

	const headerClass = clsx(
		styles.header,
		active && styles.headerActive,
	);
	const navigationClass = clsx(
		styles.navigation,
		active && styles.navActive,
	);

	return (
		<>
			<Logo className={`${headerClass} ${styles.logo}`} id={LOGO} />
			<div className={`${headerClass} ${styles.menu}`} onClick={() => setActive((val) => !val)}>
				<Hamburger id={HAMBURGER} active={active} />
			</div>
			<div className={navigationClass}>
				<div className={styles.connect}>
					{}
				</div>
				<div className={styles.navList}>
					{
						navLabels.map((label, i) => (
							<div key={i} className={styles.navItem}>
								<p>{label}</p>
							</div>
						))
					}
				</div>
			</div>
		</>
	);
}
