import { Dispatch, SetStateAction } from "react";

export interface IProviderProps {
    modal: boolean;
    setModal: Dispatch<SetStateAction<boolean>>;
}