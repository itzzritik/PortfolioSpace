'use client';

import UserDataProvider, { useUserData } from './UserData';

export default function GlobalContextProvider (props) {
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
