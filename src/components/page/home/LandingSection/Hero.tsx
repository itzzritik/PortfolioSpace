'use client';

import { useMemo } from 'react';

import clsx from 'clsx';

import { ELandingHeroID } from '#data/constants/ReactID';
import { useUserData } from '#data/context';
import { splitSentence } from '#utils/function/general';

import styles from './hero.module.scss';

const {
	HERO, HERO_OVERLAY,
	GREETING, GREETING_OVERLAY,
	INTRO, INTRO_OVERLAY,
	ROLE, ROLE_OVERLAY,
	SEPARATOR, SEPARATOR_OVERLAY,
	BIO_1, BIO_OVERLAY_1,
	BIO_2, BIO_OVERLAY_2,
} = ELandingHeroID;

export default function Hero (props: HeroProps) {
	const { isOverlay } = props;
	const { name, currentRole, bio } = useUserData();

	const SplitBio = useMemo(() => splitSentence(bio) ?? [], [bio]);

	const heroClass = clsx(
		styles.hero,
		isOverlay && styles.overlay,
	);

	return (
		<div className={heroClass} id={isOverlay ? HERO_OVERLAY : HERO}>
			<div className={styles.greeting} id={isOverlay ? GREETING_OVERLAY : GREETING}>
				<span>Hello</span>
			</div>
			<div className={styles.intro} id={isOverlay ? INTRO_OVERLAY : INTRO}>
				<span>I’m </span>{name?.replace(/ .*/, '')}
			</div>
			<h1 className={styles.role} id={isOverlay ? ROLE_OVERLAY : ROLE}>{currentRole}</h1>
			<div className={styles.footer}>
				<span className={styles.separator} id={isOverlay ? SEPARATOR_OVERLAY : SEPARATOR} />
				<div className={styles.heroBio}>
					<p id={isOverlay ? BIO_OVERLAY_1 : BIO_1}>{SplitBio[0]}</p>
					<p id={isOverlay ? BIO_OVERLAY_2 : BIO_2}>{SplitBio[1]}</p>
				</div>
			</div>
		</div>
	);
}

interface HeroProps {
	isOverlay?: boolean;
}
