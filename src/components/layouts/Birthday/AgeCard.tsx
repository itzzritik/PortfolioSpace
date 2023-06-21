import { useEffect, useState } from 'react';

import { sample } from 'lodash';
import TextTransition from 'react-text-transition';

import { BirthDayTitle, dateFields } from '#data/constants/BirthdayCard';
import { IDateFormat } from '#data/types/common.d';
import { calculateAge } from '#utils/function/general';

import styles from './ageCard.module.scss';

export default function AgeCard (props: IAgeCardProps) {
	const { dob } = props;
	const [age, setAge] = useState<IDateFormat>(calculateAge(dob));
	const [title, setTitle] = useState(sample(BirthDayTitle));

	useEffect(() => {
		const interval = setInterval(() => setAge(calculateAge(dob)), 1000);
		return () => clearInterval(interval);
	}, [dob]);

	useEffect(() => {
		const intervalId = setInterval(
			() => setTitle(sample(BirthDayTitle)),
			3000,
		);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<div className={styles.ageCard}>
			<span className={styles.title}>
				<TextTransition translateValue='80%' inline>{title}</TextTransition>
				since
			</span>
			{
				dateFields.map((field, index) => {
					return (
						<span key={index} className={styles[field]} style={{ gridArea: field }}>
							<span className={styles.label}>{field}</span>{' '}
							<span className={styles.value}>{age?.[field]}</span>
						</span>
					);
				})
			}
		</div>
	);
}

interface IAgeCardProps {
	dob: string;
}
