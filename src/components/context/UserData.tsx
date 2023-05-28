import { useState, createContext, useContext, useEffect } from 'react';

import { fetcher } from '../../utils/function/fetcher';


const UserDataContext = createContext(),
	useUserData = () => useContext(UserDataContext);

export default function UserDataProvider (props) {
	const { children, staticUser } = props,
		[userData, setUserData] = useState(staticUser);

	useEffect(() => {
		fetcher('/api/getFullUser', { method: 'POST' }).then(setUserData);
	}, []);

	return (
		<UserDataContext.Provider value={userData}>
			{children}
		</UserDataContext.Provider>
	);
}
export { useUserData };
