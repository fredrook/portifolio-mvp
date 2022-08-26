import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export interface IContextProvider { 
    children: ReactNode; 
}

export interface IProviderProps {
    modal: boolean;
    setModal: Dispatch<SetStateAction<boolean>>;
}

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