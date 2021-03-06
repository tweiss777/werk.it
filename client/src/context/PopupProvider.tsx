import React from "react";
import { createContext, useState } from "react";
import { IPopupContext, popupContextDefault } from "../Interfaces/IPopupContext";



export const PopUpContext = createContext<IPopupContext>(popupContextDefault)


interface IProps{
    children: JSX.Element| JSX.Element[];
}





export default function PopupProivder({children}:IProps){
  const [showAddPopup,setShowAddPopup] = useState<boolean>(false)
  const [showJobPopup,setShowJobPopup] = useState<boolean>(false);

    
    function handleNewJobPopup(value: boolean){
        console.log(`add new job button clicked ${value}`)
        setShowAddPopup(value)
    }

    function handleJobPopup(value: boolean){
        console.log("current job button clicked")
        setShowJobPopup(value)
    }




  return(
    <PopUpContext.Provider value={{showNewJob:showAddPopup,showJobInfo:showJobPopup,setShowNewJob:handleNewJobPopup,setShowJobInfo:handleJobPopup}}>
        {children}
    </PopUpContext.Provider>

    )




}

