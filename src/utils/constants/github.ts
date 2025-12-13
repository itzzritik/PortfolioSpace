export const API = {
	createRepo: () => "user/repos",
	user: () => "user",
	publicUser: (username: string) => `users/${username}`,
	file: (owner: string, fileName: string) => `repos/${owner}/${owner}/contents/profile/${fileName}`,
	commits: (owner: string) => `repos/${owner}/${owner}/commits/main`,
};
