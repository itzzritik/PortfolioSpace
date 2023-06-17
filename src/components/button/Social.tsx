import { startCase } from 'lodash';

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

	let socialClass = styles.social;
	className && (socialClass += ` ${className}`);
	dark && (socialClass += ` ${styles.dark}`);

	return (
		<div className={socialClass}>
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
	handles: ISocialHandle[]
	dark?: boolean;
}
interface ISocialHandle {
	platform: string;
	handle: string;
	url: string;
}
