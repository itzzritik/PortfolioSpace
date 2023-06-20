import { dateFields } from '#data/constants/BirthdayCard';

export interface IElements {
	[key: string]: HTMLElement | null;
}

export type IDateFormat = {
	[K in typeof dateFields[number]]: number;
}

export enum EStartFieldSpeed {
	SLOW = 0.2,
	MEDIUM = 0.6,
	FAST = 1,
}
