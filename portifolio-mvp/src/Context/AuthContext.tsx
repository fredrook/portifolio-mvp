import { createContext, useState } from "react";
import { IContextProvider } from "../interfaces/IContextProvider";
import { IProviderProps } from "../interfaces/IProviderProps";

export const UserContext = createContext<IProviderProps>({} as IProviderProps);

const AuthContext = ( { children }: IContextProvider ) => {

    const [ visible, setIsVisible ] = useState(false);

    return (
        <UserContext.Provider value={{visible, setIsVisible}}>
            {children}
        </UserContext.Provider>
    )
}

export default AuthContext;