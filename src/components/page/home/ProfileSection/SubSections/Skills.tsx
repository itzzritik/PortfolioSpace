"use client";

import clsx from "clsx";
import { chunk } from "lodash";
import { useRef } from "react";

import { useUserData } from "#data/context";
import { EStartFieldSpeed } from "#data/types/common";
import useInView from "#utils/hooks/useInView";

import styles from "./skills.module.scss";

const belts = 3;

export default function Skills(props: ISkillsProps) {
	const { className } = props;
	const { topSkills, skills } = useUserData();
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref);

	const rest = skills.filter((skill) => !topSkills.includes(skill));
	const rows = chunk(rest, Math.ceil(rest.length / belts));

	const skillsClass = clsx(styles.skills, className, inView && styles.visible);

	return (
		<div className={skillsClass} ref={ref}>
			<h1>Skills</h1>
			<div className={styles.header}>
				<span>What I build with</span>
				<span className={styles.line} />
				<span className={styles.summary}>{topSkills.length} core technologies</span>
			</div>
			<div
				className={styles.core}
				onMouseEnter={() => {
					window.starFieldSpeed = EStartFieldSpeed.MEDIUM;
				}}
				onMouseLeave={() => {
					window.starFieldSpeed = EStartFieldSpeed.SLOW;
				}}>
				{topSkills.map((skill) => (
					<span className={styles.pill} key={skill}>
						<span className={styles.dot} />
						{skill}
					</span>
				))}
			</div>
			<div className={clsx(styles.header, styles.secondary)}>
				<span>Also fluent in</span>
				<span className={styles.line} />
				<span className={styles.summary}>{rest.length} more tools and practices</span>
			</div>
			<div className={styles.belts}>
				{rows.map((row, index) => (
					<div className={clsx(styles.belt, index % 2 && styles.reverse)} key={index}>
						<div className={styles.lane}>
							{[...row, ...row].map((skill, i) => (
								<span className={styles.chip} key={`${skill}-${i}`}>
									{skill}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

/** Violet banded gas giant with glasses, a ring and a moon. Pure CSS, same flat cartoon style as the Lottie planets. */
export const SkillsPlanet = () => (
	<div className={styles.skillsPlanet}>
		<span className={styles.ring} />
		<div className={styles.body}>
			<span className={styles.bands} />
			<span className={styles.shade} />
			<span className={styles.shine} />
			<span className={styles.outline} />
		</div>
		<span className={clsx(styles.ring, styles.front)} />
		<div className={styles.face}>
			<span className={styles.lens}>
				<span className={styles.eye} />
			</span>
			<span className={styles.bridge} />
			<span className={clsx(styles.lens, styles.right)}>
				<span className={styles.eye} />
			</span>
			<span className={styles.mouth} />
		</div>
		<span className={styles.moon} />
	</div>
);

interface ISkillsProps {
	className?: string;
}
