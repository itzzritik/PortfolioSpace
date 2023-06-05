export let gitUser: string;
export const profileUrl = () => `https://raw.githubusercontent.com/${gitUser}/${gitUser}/main/profile`;

export const gitGraphQL = async (query: string) => {
	return new Promise(async (resolve, reject) => {
		try {
			const options = {
				method: 'POST',
				headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` },
				body: JSON.stringify({ query }),
			};
			const res = await fetch('https://api.github.com/graphql', options);
			const { data } = await res.json();

			return resolve(data);
		}
		catch (err) {
			return reject(err);
		}
	});
};

export const getGitUser = async (items = 'login name bio location avatarUrl') => {
	return new Promise(async (resolve, reject) => {
		try {
			const gitData = await gitGraphQL(`{  viewer { ${items} }}`);
			return resolve(gitData?.viewer);
		}
		catch (err) {
			return reject(err);
		}
	});
};

export const getGitProfile = async () => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!gitUser) {
				gitUser = (await getGitUser('login'))?.login;
			}
			const gitData = await gitGraphQL(`{ viewer {
				repository(name: "${gitUser}") {
					profile: object(expression: "HEAD:profile/profile.json") {
					  ... on Blob { text }
					}
				}}}`);
			return resolve(JSON.parse(gitData?.viewer?.repository?.profile?.text ?? '{}'));
		}
		catch (err) {
			return reject(err);
		}
	});
};
