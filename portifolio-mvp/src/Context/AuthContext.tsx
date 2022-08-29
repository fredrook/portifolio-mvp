import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import NavBarModal from "../Pages/ModalNavBar/ModalNavBar";

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