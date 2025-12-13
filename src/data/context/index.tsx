"use client";

import type { ReactNode } from "react";

import type { IUserData } from "#data/types/userData.d";

import UserDataProvider, { useUserData } from "./UserData";

export default function GlobalContextProvider(props: IGlobalContextProviderProps) {
	const { children, userData } = props;

	return <UserDataProvider userData={userData}>{children}</UserDataProvider>;
}
export { useUserData };

interface IGlobalContextProviderProps {
	children: ReactNode;
	userData: IUserData;
}
