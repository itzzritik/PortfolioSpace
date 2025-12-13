import type { ESocialHandles } from "#data/constants/userData";

interface IAcademics {
	id: string;
	degree: string;
	field: string;
	school: string;
	location: string;
	picture: string;
	url: string;
	fromDate: string;
	toDate: string;
}
interface IExperience {
	id: string;
	companyName: string;
	roleName: string;
	roleType: string;
	description: string;
	location: string;
	picture: string;
	url: string;
	fromDate: string;
	toDate: string;
}
export interface ISocialHandles {
	platform: ESocialHandles;
	url: string;
	handle: string;
}
export interface ICountry {
	name: string;
	code: string;
	flag: string;
}
export interface ILanguage {
	code: string;
	name: string;
	nativeName: string;
	flag: string;
}

export interface IGitUser {
	login: string;
	name: string;
	bio: string;
	location: string;
	avatar_url: string;
}
export interface IGitProfile {
	personal: {
		title: string;
		currentRole: string;
		dob: string;
		displayEmail: string;
		languages: string[];
		hobbies: string[];
	};
	socialHandles: ISocialHandles[];
	academics: IAcademics[];
	experience: IExperience[];
	links: TGitLinks[];
}

export type TGitLinks = {
	key: string;
	url: string;
};

export interface IUserData {
	login: string;
	name: string;
	dob: string;
	bio: string;
	displayEmail: string;
	country: ICountry;
	avatarUrl: string;
	academics: IAcademics[];
	currentRole: string;
	experience: IExperience[];
	hobbies: string[];
	languages: ILanguage[];
	location: string;
	socialHandles: ISocialHandles[];
}
