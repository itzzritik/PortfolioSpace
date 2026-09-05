import { createContext, type ReactNode, useContext } from "react";

import type { IUserData } from "#data/types/userData.d";

const UserDataContext = createContext({} as IUserData);
const useUserData = () => useContext(UserDataContext);

export default function UserDataProvider(props: IUserDataProviderProps) {
	const { children, userData } = props;

	return <UserDataContext.Provider value={userData}>{children}</UserDataContext.Provider>;
}
export { useUserData };

interface IUserDataProviderProps {
	children: ReactNode;
	userData: IUserData;
}
