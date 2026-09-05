import type { FC } from "react";

import type { EProfileNavigationID } from "#data/constants/ReactID";

export interface IProfileSection {
	View: FC;
	Planet: FC;
	id: EProfileNavigationID;
}
