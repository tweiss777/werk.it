import { IJob } from "../Interfaces/IJob";
import React, { useState } from "react";
import LogoSVG from "../components/LogoSVG";
import '../styles/jobpopup.css';
import { usePopups } from "../hooks/usePopups";
import CloseSVG from '../components/CloseSVG'
export default function JobPopUp(){

    // states
    const [title,setTitle] = useState<string>('')
    const [company,setCompany] = useState<string>('')
    const [location,setLocation] = useState<string>('')
    const [url,setUrl] = useState<string>('')
    const [desc,setDesc] = useState<string>('')
    const {setShowNewJob} = usePopups()



    function handleCancel(){
        setShowNewJob(false)        
    }

    function handleSubmit(){
        // const newJob: IJob = {
        //     title: title,
        //     company: company,
        //     location: location,
        //     job_url: url,
        //     description: desc
        // }


        // send to backend here below
}

    return(
        <>
            {/* this is the background where the opacity will be half and bg dark */}
            {/* should be position fixed */}
            <div className="popup-bg">
                <div className="popup">
                <div className="form-top">
                    {/* where logo and exit button will be placed */}
                    <LogoSVG />
                    {/* exit button goes here */}
                    <button className="close" onClick={handleCancel}><CloseSVG /></button>
                </div>
                <div className="form-header">
                    <h1>Add a new job!</h1>
                    <h3>You can also use our <a>Chrome Extension</a> to add jobs easilly and automatically!</h3>
                </div>



                    <div className="form-input">
                    <label>Job Title</label>
                    <input type="text" onChange={(event:React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)} />

                    </div>
                    
                    <div className="form-input">
                        <label>Company</label>
                        <input type='text' onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCompany(event.target.value)} />
                    </div>
                    
                    <div className="form-input">
                        <label>Location</label>
                        <input type='text' onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLocation(event.target.value)} />
                    </div>
                    
                    <div className="form-input">
                        <label>Post URL</label>
                        <input type='text' onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUrl(event.target.value)} />
                    </div>
                    
                    <div className="form-input">
                        <label >Description</label>
                        <textarea onChange={(event:React.ChangeEvent<HTMLTextAreaElement>) => setDesc(event.target.value)}></textarea>    
                    </div>
                    <div className="form-input">
                        <button  className="save" onClick={handleSubmit}>Save</button>
                        <button className="cancel" onClick={handleCancel}>Cancel</button>
                    </div>

                    

                </div>
            </div>        
        </>

    )



}