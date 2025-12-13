import type { IGitProfile, IGitUser, TGitLinks } from "#data/types/userData.d";
import { API } from "#utils/constants/github";
import { base64ToJson } from "#utils/function/general";

export let gitUser: string;
export const profileUrl = () => `https://raw.githubusercontent.com/${gitUser}/${gitUser}/main/profile`;

export const gitFetcher = async <T>(method: string, route: string, body?: object) => {
	const headers: Record<string, string> = {
		"Content-Type": "application/json",
		Accept: "application/vnd.github+json",
		"cache-control": "no-cache",
	};

	if (process.env.GITHUB_TOKEN) headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;

	const options = {
		method,
		headers,
		...(body && { body: JSON.stringify(body) }),
	};

	const req = await fetch(`https://api.github.com/${route}`, options);
	const res = (await req.json()) as T;
	return res;
};

export const getGitUser = async () => {
	let user: IGitUser;
	if (process.env.GITHUB_TOKEN) user = await gitFetcher<IGitUser>("GET", API.user());
	else user = await gitFetcher<IGitUser>("GET", API.publicUser("itzzritik"));

	if (!user || !user.login) throw { status: 404, message: "Git user not found" };

	gitUser = user.login;
	return user;
};

export const getGitProfile = async () => {
	if (!gitUser) await getGitUser();
	if (!gitUser) throw { status: 404, message: "Git user not found" };
	const profile = await gitFetcher<TProfileReq>("GET", API.file(gitUser, "profile.json"));
	if (!profile.content) throw { status: 404, message: "Profile not found", sha: profile.sha };

	const contentJson = base64ToJson<IGitProfile>(profile.content);
	return contentJson;
};

export const getGitLinks = async () => {
	if (!gitUser) await getGitUser();
	if (!gitUser) throw { status: 404, message: "Git user not found" };
	const profile = await gitFetcher<TProfileReq>("GET", API.file(gitUser, "links.json"));

	if (!profile.content) return null;
	const contentJson = base64ToJson<TGitLinks>(profile.content);
	return contentJson;
};

type TProfileReq = {
	sha?: string;
	content?: string;
};
