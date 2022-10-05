import { createContext, useState } from "react";
import { IContextProvider } from "../interfaces/IContextProvider";
import { IProviderProps } from "../interfaces/IProviderProps";

export const UserContext = createContext<IProviderProps>({} as IProviderProps);

const AuthContext = ( { children }: IContextProvider ) => {

    const [ modal, setModal ] = useState(false);

    return (
        <UserContext.Provider value={{modal, setModal}}>
            {children}
        </UserContext.Provider>
    )
}

export default AuthContext;