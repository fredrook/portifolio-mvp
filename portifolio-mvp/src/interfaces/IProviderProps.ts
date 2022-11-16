import { Dispatch, SetStateAction } from "react";

export interface IProviderProps {
    visible: boolean;
    setIsVisible: Dispatch<SetStateAction<boolean>>;
}