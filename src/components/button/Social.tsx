import clsx from 'clsx';
import { startCase } from 'lodash';

import { ISocialHandles } from '#data/types/userData';

import Facebook from '../../assets/img/social/facebook.svg';
import Github from '../../assets/img/social/github.svg';
import Instagram from '../../assets/img/social/instagram.svg';
import Linkedin from '../../assets/img/social/linkedin.svg';
import Twitter from '../../assets/img/social/twitter.svg';

import Button from './Button';
import styles from './social.module.scss';

export default function Social (props: SocialProps) {
	const { className, handles = [], dark } = props;

	const icons = {
		github: Github,
		linkedin: Linkedin,
		instagram: Instagram,
		twitter: Twitter,
		facebook: Facebook,
	};

	const classX = clsx(
		styles.social,
		className,
		dark && styles.dark,
	);

	return (
		<div className={classX}>
			{
				handles.map(({ platform, handle, url }, i) => (
					<Button className={`${styles.handle} ${styles[platform]}`} key={i} Icon={icons[platform]} back stopPropagation
						tooltip={`${startCase(platform)}: ${handle}`} onClick={() => window.open(`${url}/${handle}`, '_blank')}
					/>
				))
			}
		</div>
	);
}

interface SocialProps {
	className?: string;
	handles: ISocialHandles[]
	dark?: boolean;
}
