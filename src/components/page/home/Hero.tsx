'use client';

import { useUserData } from '#data/context';

import { splitSentence } from '../../../utils/function/general';

import styles from './hero.module.scss';

export default function Hero (props: HeroProps) {
	const { isOverlay } = props;
	const { name, currentRole, bio } = useUserData();

	return (
		<div className={`${styles.hero} ${isOverlay ? styles.overlay : ''}`}>
			<div className={styles.greeting}><span>Hello</span></div>
			<div className={styles.intro}>
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
