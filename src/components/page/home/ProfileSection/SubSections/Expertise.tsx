"use client";

import clsx from "clsx";
import { Lottie } from "lottie-react";
import { useEffect, useRef, useState } from "react";

import AnimDancingNeptune from "#assets/animations/space/DancingNeptune.json";
import { useUserData } from "#data/context";
import type { IExperience } from "#data/types/userData.d";
import useInView from "#utils/hooks/useInView";

import styles from "./expertise.module.scss";

const autoAdvanceMs = 4500;

/** "• line\n• Tech: a, b" → bullets (with "– " sub-lines flagged) + tech chips */
const parseDescription = (description: IExperience["description"]) => {
	const lines = description
		.split("\n")
		.map((line) => line.trim())
		.filter(Boolean);
	const techLine = lines.find((line) => /^•?\s*tech(stack)?:/i.test(line));
	const tech = techLine?.replace(/^•?\s*tech(stack)?:\s*/i, "").split(/,\s*/) ?? [];
	const bullets = lines.filter((line) => line !== techLine).map((line) => ({ sub: line.startsWith("–"), text: line.replace(/^[•–]\s*/, "") }));

	return { bullets, tech };
};

export default function Expertise(props: IExpertiseProps) {
	const { className } = props;
	const { experience, education } = useUserData();
	const [active, setActive] = useState(0);
	const [touched, setTouched] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref);

	const job = experience[active];
	const { bullets, tech } = parseDescription(job.description);
	const degree = education[0]; // ponytail: highest degree only, list all when there is room
	const since = experience[experience.length - 1].fromDate.slice(-4);

	useEffect(() => {
		if (!inView || touched || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const timer = setInterval(() => setActive((index) => (index + 1) % experience.length), autoAdvanceMs);
		return () => clearInterval(timer);
	}, [inView, touched, experience.length]);

	const expertiseClass = clsx(styles.expertise, className, inView && styles.visible);

	return (
		<div className={expertiseClass} ref={ref}>
			<h1>Expertise</h1>
			<div className={styles.header}>
				<span>Where I have worked</span>
				<span className={styles.line} />
				<span className={styles.summary}>
					{experience.length} roles since {since}
				</span>
			</div>
			<div className={styles.body}>
				<div className={styles.rail} onMouseEnter={() => setTouched(true)}>
					{experience.map((item, index) => (
						<button
							className={clsx(styles.item, index === active && styles.active)}
							key={item.company}
							onClick={() => setActive(index)}
							onFocus={() => {
								setTouched(true);
								setActive(index);
							}}
							onMouseEnter={() => setActive(index)}
							title={`${item.company}, ${item.fromDate} — ${item.toDate}`}
							type="button">
							<span className={styles.logo} style={{ backgroundImage: `url(${item.logo})` }} />
							<span className={styles.company}>{item.company}</span>
						</button>
					))}
				</div>
				<div className={styles.panel} key={active} onMouseEnter={() => setTouched(true)}>
					<h2 className={styles.role}>{job.title}</h2>
					<p className={styles.org}>
						<span className={styles.company}>{job.company}</span>
						<span className={styles.meta}>{job.employmentType}</span>
						<span className={clsx(styles.meta, styles.period)}>
							{job.fromDate} — {job.toDate}
						</span>
						<span className={styles.meta}>{job.location}</span>
					</p>
					<ul className={styles.bullets}>
						{bullets.map(({ sub, text }) => (
							<li className={clsx(sub && styles.sub)} key={text}>
								{text}
							</li>
						))}
					</ul>
					<div className={styles.tech}>
						{tech.map((name) => (
							<span key={name}>{name}</span>
						))}
					</div>
				</div>
			</div>
			<div className={styles.education}>
				<span className={styles.logo} style={{ backgroundImage: `url(${degree.logo})` }} />
				<span className={styles.text}>
					<span className={styles.school}>{degree.school}</span>
					<span>
						{degree.degree.replace(/\s*-\s*\S+$/, "")} in {degree.field}, {degree.score}
					</span>
				</span>
				<span className={styles.period}>
					{degree.fromDate} — {degree.toDate}
				</span>
			</div>
		</div>
	);
}

export const ExpertisePlanet = () => {
	return <Lottie autoplay className={styles.expertisePlanet} loop speed={0.8} src={AnimDancingNeptune} />;
};

interface IExpertiseProps {
	className?: string;
}
