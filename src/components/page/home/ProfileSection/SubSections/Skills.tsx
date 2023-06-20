import clsx from 'clsx';

import styles from './skills.module.scss';

export default function Skills (props: ISkillsProps) {
	const { className } = props;

	const skillsClass = clsx(
		styles.skills,
		className,
	);

	return (
		<div className={skillsClass}>
			<h1>Skills</h1>
		</div>
	);
}

interface ISkillsProps {
	className?: string;
}
