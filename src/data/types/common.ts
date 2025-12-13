import type { dateFields } from "#data/constants/BirthdayCard";

export interface IElements {
	[key: string]: HTMLElement | null;
}

export type IDateFormat = {
	[K in (typeof dateFields)[number]]: number;
};

export enum EStartFieldSpeed {
	SLOW = 0.1,
	MEDIUM = 0.4,
	FAST = 1,
}
