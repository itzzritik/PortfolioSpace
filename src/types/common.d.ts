export declare global {
	import { EStartFieldSpeed } from '#data/types/common.d';

	interface Window {
		animating?: boolean;
		starFieldSpeed: EStartFieldSpeed;
	}

	declare module '*.svg' {
		import { FC, SVGProps } from 'react';

		const SVG: FC<SVGProps<SVGSVGElement>>;
		export default SVG;
	}
}
