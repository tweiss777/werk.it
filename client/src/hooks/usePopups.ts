import { useContext } from "react"
import { PopUpContext } from "../context/PopupProvider"

export const usePopups = () =>{
    return useContext(PopUpContext);
}