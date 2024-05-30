"use client";
import React from 'react'
import Navbar from '@/app/components/Commen/navLanding'
import LandingFooterTwo from '@/app/components/Commen/landingFooterTwo'
import StillQuestions from '@/app/components/LandingPageTwo/stillQuestions'
import FaqSection from '@/app/components/LandingPageTwo/FaqSection'
import Pricing from '@/app/components/LandingPageTwo/Pricing'
import ComparePlans from '@/app/components/LandingPageTwo/ComparePlans'

const LandingPageTwo = () => {
  return (
    <div>
      <div style={{height: 'auto', width:'100%', backgroundImage: `url('bg-head.svg')`}}>

        {/*navbar*/}
        <div>
        <Navbar/>
        </div>
        {/*Pricing*/}
        <div style={{height:'900px', background:'#0A273E', border:'1px solid black'}}>
          <Pricing/>
        </div>

        {/*Compare plans*/}
        <div style={{height:'1230px', background:'#FFFFFF'}}>
          <ComparePlans/>
        </div>

        {/*Frequently asked question*/}
        <div style={{height:'830px',  background:'white'}}>
          <FaqSection/>
        </div>

        {/*still having question*/}
        <div className='flex items-center justify-center' style={{height:'580px',background:'white'}}>
          <StillQuestions/>
        </div>

        {/*footer*/}
        <div className="flex flex-col items-center justify-evenly" style={{height:'380px',background:'#0A273E'}}>
          <LandingFooterTwo/>
        </div>
        
        
      </div>
    </div>
    
  )
}

export default LandingPageTwo;

