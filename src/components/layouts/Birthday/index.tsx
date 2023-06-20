import { useEffect, useState } from 'react';

import clsx from 'clsx';

import { EStartFieldSpeed } from '#data/types/common.d';
import { calculateAge } from '#utils/function/general';

import AgeCard from './AgeCard';
import styles from './birthday.module.scss';

const BirthdayModal = (props: IBirthdayModalProps) => {
	const { dob } = props;

	const [modalPos, setModalPos] = useState({ x: -1, y: -1 });

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setModalPos({
				x: event.clientX + 24,
				y: event.clientY > window.innerHeight - 350 - 32 ? window.innerHeight - 350 - 8 : event.clientY + 24,
			});
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	if (modalPos.x < 0 || modalPos.y < 0) return null;

	return (
		<div className={styles.birthdayModal} style={{ left: modalPos.x, top: modalPos.y }}>
			<AgeCard dob={dob} />
		</div>
	);
};
export default function Birthday (props: IBirthdayProps) {
	const { className, dob, label } = props;
	const [showCard, setShowCard] = useState(false);

	const birthdayClass = clsx(
		styles.age,
		className,
	);

	return (
		<>
			<span
				className={birthdayClass}
				onMouseEnter={() => {
					window.starFieldSpeed = EStartFieldSpeed.MEDIUM;
					setShowCard(true);
				}}
				onMouseLeave={() => {
					window.starFieldSpeed = EStartFieldSpeed.SLOW;
					setShowCard(false);
				}}
			>
				{calculateAge(dob)?.years}{label}
			</span>
			{
				showCard && dob &&
				<BirthdayModal dob={dob} />
			}

		</>
	);
}

interface IBirthdayProps {
	className?: string;
	dob: string;
	label?: string;
}
interface IBirthdayModalProps {
	dob: string;
}
