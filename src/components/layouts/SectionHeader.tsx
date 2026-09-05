import clsx from "clsx";
import type { CSSProperties } from "react";

import styles from "./sectionHeader.module.scss";

/** "Label ── summary" eyebrow above a profile section. Reveals when `visible`, `delay` seconds after. */
export default function SectionHeader(props: ISectionHeaderProps) {
	const { className, label, summary, visible, delay = 0 } = props;

	return (
		<div className={clsx(styles.sectionHeader, className, visible && styles.visible)} style={{ "--delay": `${delay}s` } as CSSProperties}>
			<span>{label}</span>
			<span className={styles.line} />
			<span className={styles.summary}>{summary}</span>
		</div>
	);
}

interface ISectionHeaderProps {
	className?: string;
	label: string;
	summary: string;
	visible: boolean;
	delay?: number;
}
