'use client';

import Email from '#assets/img/social/email.svg';
import Button from '#components/button/Button';
import Social from '#components/button/Social';
import { useUserData } from '#data/context';

import styles from './minor.module.scss';

export default function Hero (props: MinorProps) {
	const { isOverlay } = props;
	const { socialHandles, displayEmail, country, location } = useUserData();

	return !isOverlay ?
		<div className={styles.minor}>
			<Social handles={socialHandles} dark />
			<Button className={styles.descMail} Icon={Email} label={displayEmail} link={`mailto:${displayEmail}`} newTab dark
				tooltip="Yayyyy! I'm already excited 🎉"
			/>
		</div>
		:
		<div className={styles.minor}>
			<div className={styles.welcome}>
				<p>welcome</p>
				<p>to my portfolio</p>
			</div>
			<div className={styles.location}>
				<span className={styles.flag} style={{ backgroundImage: `url(${country?.flag})` }} />
				{location}
			</div>
		</div>;

}

interface MinorProps {
	isOverlay?: boolean;
}
