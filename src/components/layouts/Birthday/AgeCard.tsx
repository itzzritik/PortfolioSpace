import { useEffect, useState } from 'react';

import moment from 'moment';

import styles from './ageCard.module.scss';

const fields: moment.unitOfTime.Base[] = ['years', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'];
export default function AgeCard (props: IAgeCardProps) {
	const { date, position } = props;
	const today = moment();
	const dob = moment(date);
	const [birthday, setBirthday] = useState<IDateFormat>({} as IDateFormat);

	useEffect(() => {
		const interval = setInterval(() => {
			fields.forEach((field) => {
				const diff = today.diff(dob, field);
				const padding = field === 'milliseconds' ? 3 : 2;

				setBirthday((prev) => ({ ...prev, [field]: diff.toString().padStart(padding, '0') }));
				dob.add(diff, field);
			});
		}, 1);

		return () => clearInterval(interval);
	}, [birthday, dob, today]);

	return (
		<div className={styles.ageCard} style={{ top: position?.top, left: (position?.left ?? 0) + (position?.width ?? 0) }}>
			{
				fields.map((field, index) => {
					return <span key={index}><span className={styles.value}>{birthday?.[field]}</span> {field}, </span>;
				})
			}
		</div>
	);
}

interface IAgeCardProps {
	date: Date;
	position?: DOMRect;
}
type IDateFormat = {
	[key in moment.unitOfTime.Base]: string;
}
