import { createContext, type ReactNode, useContext, useEffect, useState } from "react";

import type { IUserData } from "#data/types/userData.d";

const UserDataContext = createContext({} as IUserData);
const useUserData = () => useContext(UserDataContext);

export default function UserDataProvider(props: IUserDataProviderProps) {
	const { children, userData: staticUser } = props;
	const [userData, setUserData] = useState<IUserData>(staticUser);

	useEffect(() => {
		fetch("/getFullUser")
			.then((res) => res.json())
			.then(setUserData);
	}, []);

	return <UserDataContext.Provider value={userData}>{children}</UserDataContext.Provider>;
}
export { useUserData };

interface IUserDataProviderProps {
	children: ReactNode;
	userData: IUserData;
}
