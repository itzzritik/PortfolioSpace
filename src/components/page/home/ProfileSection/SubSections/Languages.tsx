import clsx from 'clsx';

import styles from './languages.module.scss';

export default function Languages (props: ILanguagesProps) {
	const { className } = props;

	const languageClass = clsx(
		styles.languages,
		className,
	);

	return (
		<div className={languageClass}>
			<h1>Languages</h1>
		</div>
	);
}

interface ILanguagesProps {
	className?: string;
}
