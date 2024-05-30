import React from 'react'

const HowItWorks = () => {
  return (
    <>
      {/*video side left*/}
      <div className="flex items-center justify-center" style={{ width:'808px', height:'421px'}}>
        <div className="flex flex-col items-center justify-evenly" style={{ width:'680px', height:'390px', background:'#FFF1E8', borderRadius:'8px'}}>
          <div style={{color:'0F4C7B', fontFamily:'Lexend', fontSize:'20px', lineHeight:'42px',  fontWeight:'bold'}}>How Revaluator (AI Recuriter) works ? </div>
          <video controls width="90%" height="90%" style={{borderRadius:'5px'}}>
            <source src="your_video_file_path.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/*content side right*/}
      <div style={{width:'488px', height:'421px', display:'flex', flexDirection:'column', justifyContent:'center', gap:'18px'}}>
        <div style={{fontFamily:'Lexend', fontSize:'30px', fontWeight:'bold', color:'#FFFFFF'}}>What we do for you ? </div>
        <div style={{fontFamily:'Lexend', fontSize:'16px', color:'#FFFFFF'}}>Revaluator allows you to maximise the return on investment of your candidate database by using ConversationalAi to automate high volume tasks such as candidate screening, shortlisting, database re engagement registration, sourcing and gathering compliance documents -- providing a more engaging
        conversational experience</div>
        <button className="text-white px-4 py-2 rounded-full text-xl tracking-wide" style={{backgroundColor:'#EC9521', height:'36px', width:'260px', fontSize:'16px', lineHeight:'36px', display:'flex', alignItems:'center',  justifyContent:'center'}}>See Our Explainer Video</button>
      </div>
    </>
    
  )
}
export default HowItWorks;
