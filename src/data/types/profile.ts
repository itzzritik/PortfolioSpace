import type { FC } from "react";

import type { EProfileNavigationID } from "#data/constants/ReactID";

export interface IProfileSection {
	name: string;
	View: FC;
	Planet?: FC;
	id: EProfileNavigationID;
	orbit: EOrbit;
	rings: boolean;
}
export enum EOrbit {
	LEFT = "left",
	RIGHT = "right",
	CENTRE = "centre",
}
