import { IUserData } from '../../data/interface/userData';
import { getGitUser, getGitProfile } from '../github/gitFetch';

import { getCountry, getLanguages } from './locale';

export const getUserData = () => {
	return new Promise<IUserData>((resolve, reject) => {
		try {
			getGitUser().then((user) => {
				getGitProfile().then((profile) => {
					if (!user) return reject('Git user not found');

					const userData: IUserData = {
						...user,
						country: getCountry(user?.location?.split(' ').pop()),
						languages: getLanguages(profile?.personal?.languages),
						displayEmail: profile.personal.displayEmail,
						currentRole: profile.personal.currentRole,
						dob: profile.personal.dob,
						hobbies: profile.personal.hobbies,
						socialHandles: profile.socialHandles,
						academics: profile.academics,
						experience: profile.experience,
					};

					return resolve(userData);
				});
			});
		}
		catch (e) {
			return reject(e);
		}
	});
};
