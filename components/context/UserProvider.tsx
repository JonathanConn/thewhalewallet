import { createContext, SetStateAction, useContext, useState, useEffect } from "react";
import IUser from "@/components/types/IUser";
import userHandler from "@/components/utils/UserHandler.service";
import { UserProfile } from "@dynamic-labs/sdk-react";
import { useDynamicContext } from '@dynamic-labs/sdk-react';

type UserContextType = {
    userContext: IUser;
    setUserContext: React.Dispatch<SetStateAction<IUser>>;
}
const initUserContext = {
    userContext: {} as IUser,
    setUserContext: () => { }
}

const UserContext = createContext<UserContextType>(initUserContext);

export function UserProvider({ children }: any) {
    const [userContext, setUserContext] = useState<IUser>({} as IUser);
    const { user } = useDynamicContext();

    useEffect(() => {
        async function getUser(user: UserProfile) {
            let u = await userHandler(user.email as string);
            console.log(u)
            setUserContext(u);
        }

        if (user) {
            getUser(user);
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ userContext, setUserContext }}>{children}</UserContext.Provider>
    )
}

export function useUserContext() {
    return useContext(UserContext);
}