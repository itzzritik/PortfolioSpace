import type { IUserData } from "#data/types/userData.d";

export const getUserData = async () => {
	const response = await fetch("https://ritik.me/api/profile", { cache: "no-store" });
	if (!response.ok) {
		throw new Error(`Profile request failed: ${response.status}`);
	}
	return response.json() as Promise<IUserData>;
};
