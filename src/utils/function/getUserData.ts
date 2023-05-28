
import { getCountry, getLanguages } from './locale';
import { getGitUser, getGitProfile } from '../github/gitFetch';

export const getUserData = async () => {
	return new Promise(async (resolve, reject) => {
		try {
			const [user, profile] = await Promise.all([getGitUser(), getGitProfile()]);

			if (!user) return resolve({});

			[user.country, user.languages] = await Promise.all([
				getCountry(user?.location?.split(' ').pop()),
				getLanguages(profile?.personal?.languages)
			]);
			user.displayEmail = profile.personal.displayEmail;
			user.currentRole = profile.personal.currentRole;
			user.dob = profile.personal.dob;
			user.hobbies = profile.personal.hobbies;
			user.socialHandles = profile.socialHandles;
			user.academics = profile.academics;
			user.experience = profile.experience;

			return resolve(user);
		}
		catch (e) {
			return reject(e);
		}
	});
};
