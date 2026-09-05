import type { ESocialHandles } from "#data/constants/userData";

export interface ISocialHandles {
	handle: string;
	platform: ESocialHandles;
	url: string;
}
export interface IExperience {
	title: string;
	company: string;
	employmentType: string;
	fromDate: string;
	toDate: string;
	location: string;
	linkedin: string;
	description: string;
	logo: string;
}
export interface IEducation {
	school: string;
	field: string;
	degree: string;
	fromDate: string;
	toDate: string;
	score: string;
	linkedin: string;
	logo?: string;
}
export interface ILanguage {
	name: string;
	proficiency: string;
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
	experience: IExperience[];
	education: IEducation[];
	language: ILanguage[];
	topSkills: string[];
	skills: string[];
}
