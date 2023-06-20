import { IUserData } from '#data/types/userData';
import { getGitUser, getGitProfile } from '#utils/github/gitFetch';

import { getCountry, getLanguages } from './locale';

export const getUserData = () => {
	return new Promise<IUserData>((resolve, reject) => {
		try {
			getGitUser().then(async (user) => {
				if (!user) return reject('Git user not found');

				const profile = await getGitProfile();
				const userData: IUserData = {
					...user,
					country: await getCountry(user?.location?.split(' ').pop()),
					languages: await getLanguages(profile?.personal?.languages),
					displayEmail: profile.personal.displayEmail,
					currentRole: profile.personal.currentRole,
					dob: profile.personal.dob,
					hobbies: profile.personal.hobbies,
					socialHandles: profile.socialHandles,
					academics: profile.academics,
					experience: profile.experience,
				};
				console.log(userData.displayEmail);
				return resolve(userData);
			});
		}
		catch (e) {
			return reject(e);
		}
	});
};
