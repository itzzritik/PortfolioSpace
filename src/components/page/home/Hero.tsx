'use client';

import clsx from 'clsx';

import { ELandingHeroID } from '#data/constants/ReactID';
import { useUserData } from '#data/context';

import { splitSentence } from '../../../utils/function/general';

import styles from './hero.module.scss';

const { HERO, GREETING, GREETING_OVERLAY, INTRO, INTRO_OVERLAY } = ELandingHeroID;

export default function Hero (props: HeroProps) {
	const { isOverlay } = props;
	const { name, currentRole, bio } = useUserData();

	const heroClass = clsx(
		styles.hero,
		isOverlay && styles.overlay,
	);

	return (
		<div className={heroClass} id={HERO}>
			<div className={styles.greeting} id={isOverlay ? GREETING_OVERLAY : GREETING}>
				<span>Hello</span>
			</div>
			<div className={styles.intro} id={isOverlay ? INTRO_OVERLAY : INTRO}>
				<span>I’m </span>{name?.replace(/ .*/, '')}
			</div>
			<h1 className={styles.role}>{currentRole}</h1>
			<div className={styles.footer}>
				<span className={styles.separator} />
				<div className={styles.heroBio}>
					{ splitSentence(bio)?.map((sentence, i) => <p key={i}>{sentence}</p>) }
				</div>
			</div>
		</div>
	);
}

interface HeroProps {
	isOverlay?: boolean;
}
