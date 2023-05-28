import React from 'react';

import UserDataProvider, { useUserData } from './UserData';

export default function GlobalContextProvider (props) {
	const { children, staticUser } = props;

	return (
		<UserDataProvider staticUser={staticUser}>
			{children}
		</UserDataProvider>
	);
}
export {
	useUserData
};
