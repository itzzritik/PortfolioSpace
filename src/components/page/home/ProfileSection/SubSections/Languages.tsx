"use client";

import clsx from "clsx";
import { useRef } from "react";

import { useUserData } from "#data/context";
import useInView from "#utils/hooks/useInView";

import styles from "./languages.module.scss";

// LinkedIn's five proficiency levels → how much of the orbit is drawn
const proficiencyLevel: Record<string, number> = {
	"Native or bilingual proficiency": 100,
	"Full professional proficiency": 88,
	"Professional working proficiency": 70,
	"Limited working proficiency": 50,
	"Elementary proficiency": 30,
};
const greeting: Record<string, string> = {
	Hindi: "नमस्ते",
	English: "Hello",
	French: "Bonjour",
};

const radius = 54;
const circumference = 2 * Math.PI * radius;

export default function Languages(props: ILanguagesProps) {
	const { className } = props;
	const { language } = useUserData();
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref);

	const languageClass = clsx(styles.languages, className, inView && styles.visible);

	return (
		<div className={languageClass} ref={ref}>
			<h1>Languages</h1>
			<div className={styles.header}>
				<span>How I talk to people</span>
				<span className={styles.line} />
				<span className={styles.summary}>{language.length} spoken languages</span>
			</div>
			<div className={styles.orbits}>
				{language.map(({ name, proficiency }) => {
					const level = proficiencyLevel[proficiency] ?? 50;
					return (
						<div className={styles.orbit} key={name}>
							<div className={styles.gauge}>
								<span className={styles.ring} />
								<svg viewBox="0 0 120 120">
									<title>{`${name}: ${proficiency}`}</title>
									<defs>
										<linearGradient id={`languageGradient-${name}`} x1="0" x2="1" y1="1" y2="0">
											<stop offset="0" stopColor="#3F00E6" />
											<stop offset="1" stopColor="#962CFF" />
										</linearGradient>
									</defs>
									<circle className={styles.track} cx="60" cy="60" r={radius} />
									<circle
										className={styles.fill}
										cx="60"
										cy="60"
										r={radius}
										stroke={`url(#languageGradient-${name})`}
										strokeDasharray={circumference}
										style={{ "--offset": circumference * (1 - level / 100) } as React.CSSProperties}
									/>
								</svg>
								<span className={styles.greeting}>{greeting[name] ?? name[0]}</span>
							</div>
							<span className={styles.name}>{name}</span>
							<span className={styles.level}>{proficiency}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}

const continents = [0, 1, 2, 3, 4];

/** Blue world with continents rolling past and a talking face. Pure CSS, same flat cartoon style as the Lottie planets. */
export const LanguagesPlanet = () => (
	<div className={styles.languagesPlanet}>
		<div className={styles.body}>
			<span className={styles.land}>
				{[...continents, ...continents].map((_v, i) => (
					<span key={i} />
				))}
			</span>
			<span className={styles.shade} />
			<span className={styles.shine} />
			<span className={styles.outline} />
		</div>
		<div className={styles.face}>
			<span className={styles.eye} />
			<span className={clsx(styles.eye, styles.right)} />
			<span className={styles.mouth} />
		</div>
		<span className={styles.speech}>
			<span />
			<span />
			<span />
		</span>
	</div>
);

interface ILanguagesProps {
	className?: string;
}
