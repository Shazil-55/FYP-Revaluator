"use client";
import React from 'react'
import Navbar from '@/app/components/Commen/navLanding'
import ContentHead from '@/app/components/LandingPage/contentHead'
import HowItWorks  from '@/app/components/LandingPage/howItWorks';
import OurTeam from '@/app/components/LandingPage/ourTeam';
import KeyBenefits from '@/app/components/LandingPage/keyBenefits';
import LandingFooterOne from '@/app/components/LandingPage/landingFooterOne'
import LandingFooterTwo from '@/app/components/Commen/landingFooterTwo'


const LandingPage = () => {
      

  return (
    <div>
      <div style={{height: '1024px', width:'100%', backgroundImage: `url('bg-head.svg')`}}>

        {/*mainHead*/}
        <div style={{}}>
          <Navbar/>
          <ContentHead/>
        </div>

        {/*How it works heading*/}
        <div style={{height:'100px', background:'white', fontFamily:'Lexend', color:'#0A273E', fontSize:'40px', fontWeight:'bold', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <div>How it works</div>
        </div>

        {/*How it works div*/}
        <div id="howItWorks" style={{height:'579px', background:'#0A273E', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <HowItWorks/>
        </div>

        {/*Our team heading*/}
        <div className = "flex items-center justify-center" style={{height:'100px', background:'white', fontFamily:'Lexend', color:'#0A273E', fontSize:'40px', fontWeight:'bold'}}>
          <div>Our Team</div>
        </div>

        {/*Our team div*/}
        <div id="ourTeam" className = "flex flex-row items-center justify-center" style={{height:'1024px', backgroundImage:"url('/ourTeamBg.svg')"}}>
          <OurTeam/>
        </div>

        {/*Key benefits*/}
        <div  className='flex flex-row justify-between items-center' style={{height:'700px', background:'#FFF1E8'}}>
          <KeyBenefits/>
        </div>

        {/*footer-1*/}
        <div className="flex items-center justify-center" style={{height:'440px', background:'white'}}>
          <LandingFooterOne/>
        </div>

        {/*footer-2*/}
        <div className="flex flex-col items-center justify-evenly" style={{height:'380px',background:'#0A273E'}}>
          <LandingFooterTwo/>
        </div>
        
        
      </div>
    </div>
    
  )
}

export default LandingPage;

