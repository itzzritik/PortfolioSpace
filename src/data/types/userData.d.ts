interface IAcademics {
	id: string
	degree: string
	field: string
	school: string
	location: string
	picture: string
	url: string
	fromDate: Date
	toDate: Date
}
interface IExperience {
	id: string
	companyName: string
	roleName: string
	roleType: string
	description: string
	location: string
	picture: string
	url: string
	fromDate: Date
	toDate: Date
}
interface ISocialHandles {
	platform: string
	url: string
	handle: string
}

export interface IGitUser {
	login: string
	name: string
	bio: string
	location: string
	avatarUrl: string
}
export interface IGitProfile {
	personal: {
		title: string
		currentRole: string
		dob: Date
		displayEmail: string
		languages: string[]
		hobbies: string[]
	}
	socialHandles: ISocialHandles[]
	academics: IAcademics[]
	experience: IExperience[]
}
export interface IUserData {
	login: string
	name: string
	dob: Date
	bio: string
	displayEmail: string
	country: object
	avatarUrl: string
	academics: IAcademics[]
	currentRole: string
	experience: IExperience[]
	hobbies: string[]
	languages: object
	location: string
	socialHandles: ISocialHandles[]
}
