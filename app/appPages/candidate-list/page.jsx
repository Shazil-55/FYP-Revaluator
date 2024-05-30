"use client"
import { useState } from "react";
import Nav from "@/app/components/Nav";
import ShowCandidateList from '../../components/ShowCandidateList'
import SkillSetTest from '../../components/SkillSetTest'
import GenerateTest from '../../components/GenerateTest'
import Navbar from '@/app/components/Dashboard/navbar'

export default function CandidateList() {
    
    const [sendTestToEmail , setSendTestToEmail] = useState (false) 
    const [sendTestToJob , setSendTestToJob] = useState (false) 
    const generateTestOnSkillSet = () => {
        setSendTestToEmail(true); // Update the state to true when the button is clicked
    };

    const generateTestOnJobPost = () => {
        setSendTestToEmail(true); 
        setSendTestToJob(true)
    };

    

    return (


        <div>
            <Navbar />

            {sendTestToEmail ?(
                <>
                {sendTestToJob?(
                <GenerateTest post = "Job Post" name="" email ="" phoneNo=""/>
                ):(

                 <SkillSetTest/>
                )}
                </>
            ):(<>
             <ShowCandidateList showSkills={generateTestOnSkillSet} showJobPost ={generateTestOnJobPost}/>
            </>
            )}
        
        </div>


    )
}
