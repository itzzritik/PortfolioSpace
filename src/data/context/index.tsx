"use client";

import { type ReactNode, useEffect, useState } from "react";

import Splash from "#components/layouts/Splash";
import UnderConstruction from "#components/layouts/UnderConstruction";
import type { IUserData } from "#data/types/userData.d";

import UserDataProvider, { useUserData } from "./UserData";

export default function GlobalContextProvider(props: IGlobalContextProviderProps) {
	const { children } = props;
	const [userData, setUserData] = useState<IUserData>();
	const [failed, setFailed] = useState(false);

	useEffect(() => {
		const loadUserData = async () => {
			const response = await fetch("https://ritik.me/api/profile");
			if (!response.ok) {
				throw new Error(`Profile request failed: ${response.status}`);
			}
			setUserData((await response.json()) as IUserData);
		};

		loadUserData().catch(() => setFailed(true));
	}, []);

	return (
		<>
			{failed ? (
				<UnderConstruction message="Unable to load profile data. Please try again later." />
			) : userData ? (
				<UserDataProvider userData={userData}>{children}</UserDataProvider>
			) : null}
			<Splash ready={failed || Boolean(userData)} />
		</>
	);
}
export { useUserData };

interface IGlobalContextProviderProps {
	children: ReactNode;
}
