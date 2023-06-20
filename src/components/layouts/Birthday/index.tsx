import { useRef, useState } from 'react';

import clsx from 'clsx';
import moment from 'moment';

import AgeCard from './AgeCard';
import styles from './birthday.module.scss';

export default function Birthday (props: IBirthdayProps) {
	const { className, dob, label } = props;
	const ref = useRef<HTMLElement>(null);
	const [showCard, setShowCard] = useState(false);

	const age = moment().diff(moment(dob), 'years');

	const birthdayClass = clsx(
		styles.age,
		className,
	);

	return (
		<>
			<span
				className={birthdayClass}
				ref={ref}
				onMouseEnter={() => setShowCard(true)}
				onMouseLeave={() => setShowCard(false)}
			>
				{age}{label}
			</span>
			{
				showCard && dob &&
				<AgeCard date={dob} position={ref?.current?.getBoundingClientRect()} />
			}
		</>
	);
}

interface IBirthdayProps {
	className?: string;
	dob: Date;
	label?: string;
}
