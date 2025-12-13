import type { IUserData } from "#data/types/userData.d";
import { getGitProfile, getGitUser } from "#utils/github/gitFetch";

import { getCountry, getLanguages } from "./locale";

export const getUserData = async () => {
	const { login, name, bio, location, avatar_url } = await getGitUser();
	const profile = await getGitProfile();

	const userData: IUserData = {
		login,
		name,
		bio,
		location,
		avatarUrl: avatar_url,
		country: await getCountry(location?.split(" ").pop()),
		languages: await getLanguages(profile?.personal?.languages),
		displayEmail: profile.personal.displayEmail,
		currentRole: profile.personal.currentRole,
		dob: profile.personal.dob,
		hobbies: profile.personal.hobbies,
		socialHandles: profile.socialHandles,
		academics: profile.academics,
		experience: profile.experience,
	};

	return userData;
};
