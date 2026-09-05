import type { ESocialHandles } from "#data/constants/userData";

export interface ISocialHandles {
	handle: string;
	platform: ESocialHandles;
	url: string;
}
export interface IUserData {
	personal: {
		about: string;
		currentRole: string;
		displayEmail: string;
		dob: string;
		hobbies: string[];
		location: {
			country: string;
			country_code: string;
			full: string;
		};
		name: string;
	};
	socialHandles: ISocialHandles[];
}
