import { IGitProfile, IGitUser } from '#data/types/userData.d';

export let gitUser: string;
export const profileUrl = () => `https://raw.githubusercontent.com/${gitUser}/${gitUser}/main/profile`;

export const gitGraphQL = <T>(query: string) => {
	return new Promise<IGraphQLResponse<T>>((resolve, reject) => {
		try {
			const options = {
				method: 'POST',
				headers: {
					'cache-control': 'no-cache',
					Authorization: `token ${process.env.GITHUB_TOKEN}`,
				},
				body: JSON.stringify({ query }),
			};
			fetch('https://api.github.com/graphql', options)
				.then((res) => res.json())
				.then(({ data }) => resolve(data));
		}
		catch (err) {
			return reject(err);
		}
	});
};

export const getGitUser = () => {
	return new Promise<IGitUser>((resolve, reject) => {
		try {
			gitGraphQL<IGitUser>('{  viewer { login name bio location avatarUrl }}').then((data) => {
				if (!gitUser && data?.viewer?.login) {
					gitUser = data?.viewer?.login;
				}
				resolve(data?.viewer);
			});
		}
		catch (err) {
			return reject(err);
		}
	});
};

export const getGitProfile = () => {
	return new Promise<IGitProfile>((resolve, reject) => {
		try {
			if (!gitUser) return reject('Git user not found');

			gitGraphQL<IGraphQLResponseProfile>(`{ viewer {
				repository(name: "${gitUser}") {
					profile: object(expression: "HEAD:profile/profile.json") {
					  ... on Blob { text }
					}
				}}}`)
				.then((data) => resolve(JSON.parse(data?.viewer?.repository?.profile?.text ?? '{}')));
		}
		catch (err) {
			return reject(err);
		}
	});
};

interface IGraphQLResponse<T> {
	viewer: T
}
interface IGraphQLResponseProfile {
	repository: {
		profile: {
			text: string
		}
	}
}
