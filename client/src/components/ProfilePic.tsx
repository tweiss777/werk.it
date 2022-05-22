import React from "react";

interface IProps{
    img_url: string
}


export default function ProfilePic({img_url}:IProps){
    return(
        <div>
            <img className="h-11 w-11 rounded-full" src={img_url} />
        </div>

    )
}