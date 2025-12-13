export declare global {
	import type { EStartFieldSpeed } from "#data/types/common";

	interface Window {
		animating?: boolean;
		starFieldSpeed: EStartFieldSpeed;
	}

	declare module "*.svg" {
		import type { FC, SVGProps } from "react";

		const SVG: FC<SVGProps<SVGSVGElement>>;
		export default SVG;
	}
}
