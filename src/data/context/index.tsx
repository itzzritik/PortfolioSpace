'use client';

import { ReactNode } from 'react';

import { IUserData } from '../types/userData';

import UserDataProvider, { useUserData } from './UserData';

export default function GlobalContextProvider (props: IGlobalContextProviderProps) {
	const { children, userData } = props;

	return (
		<UserDataProvider userData={userData}>
			{children}
		</UserDataProvider>
	);
}
export {
	useUserData,
};

interface IGlobalContextProviderProps {
	children: ReactNode;
	userData: IUserData;
}
