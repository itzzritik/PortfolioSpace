import { useEffect, useState } from 'react';

import { dateFields } from '#data/constants/common';
import { IDateFormat } from '#data/types/common';
import { calculateAge } from '#utils/function/general';

import styles from './ageCard.module.scss';

export default function AgeCard (props: IAgeCardProps) {
	const { dob } = props;
	const [age, setAge] = useState<IDateFormat>(calculateAge(dob));

	useEffect(() => {
		const interval = setInterval(() => setAge(calculateAge(dob)), 1000);
		return () => clearInterval(interval);
	}, [dob]);

	return (
		<div className={styles.ageCard}>
			<span className={styles.title}>Exploring world since</span>
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
