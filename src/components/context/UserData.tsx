'use client';
import { useState, createContext, useContext, useEffect } from 'react';


const UserDataContext = createContext(),
	useUserData = () => useContext(UserDataContext);

export default function UserDataProvider (props) {
	"use client"
	const { children, staticUser } = props,
		[userData, setUserData] = useState(staticUser);

	useEffect(() => {
		fetch('/api/getFullUser', { method: 'POST' })
			.then((res) => res.json())
			.then(setUserData);
	}, []);

	return (
		<UserDataContext.Provider value={userData}>
			{children}
		</UserDataContext.Provider>
	);
}
export { useUserData };
