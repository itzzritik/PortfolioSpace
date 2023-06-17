interface Window {
	animating?: boolean;
}

declare module '*.svg' {
	import { FC, SVGProps } from 'react';

    const SVG: FC<SVGProps<SVGSVGElement>>;
    export default SVG;
}
