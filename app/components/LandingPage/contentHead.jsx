import React from 'react'
import CardHead from'@/app/components/LandingPage/cardHead'


const ContentHead = () => {
  return (
    <div className='flex justify-around items-center' style={{width:'1300px', margin:'0 auto', height:'750px'}}>
        
        <div className='flex flex-col items-start justify-between px-4' style={{width:'53%', height:'90%'}}>
            <div className='font-bold' style={{color:'#0A273E', fontSize:'42px',fontFamily:'Lato'}}>
                We help to find you <br /> the best Candidate
            </div>
            <div className='font-medium' style={{color:'#333333', lineHeight:'35px', fontSize:'20px',fontFamily:'Lato'}}>
                Revaluator pre-screens your applicants by asking them the <br />
                most important questions so that you work with the most <br />
                relevant candidates. Our clients love this as it saves them a <br />
                significant amount of time in the screening process.
            </div>
            <button className="text-white px-4 py-2 rounded-full text-xl tracking-wide font-bold" style={{backgroundColor:'#EC9521', height:'56px', width:'200px',fontFamily:'Lato'}}>Get Started</button>
            <CardHead/>
        </div>

        <div className='flex items-center justify-center' style={{width:'47%', height:'90%'}}>
            <div className='relative' style={{top:'-50px'}}>
                <img src="/robot-outer.svg" alt="" style={{height:'655px'}}/>
                <img src="/robot-inner.svg" alt=""  className='absolute' style={{height:'550px',top:'50%', bottom:'50%', transform:'translate(6%, -50%)'}}/>
            </div>
        </div>
    </div>
  )
}

export default ContentHead
