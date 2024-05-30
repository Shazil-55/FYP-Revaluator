import React from 'react'

const LandingFooterOne = () => {
  return (
    <>
      <div >
        <img src="/landingFooter.svg" alt="" />
        <div style={{position: 'absolute', top: '3520px', left: '250px', zIndex:'0'}}>
          <p style={{fontFamily:'Lexend', color:'white', fontWeight:'bold', fontSize:'26px', lineHeight:'27px'}}>
            Start Your Journey <br />
            With Us Now
          </p>
        </div>

        <div style={{ position: 'absolute', top:'3600px', left: '250px'}}>
          <button className="text-white px-4 py-2 rounded-full text-xl tracking-wide flex items-center justify-center" style={{backgroundColor:'#EC9521', height:'36px', width:'120px',fontFamily:'Manrope', fontSize:'15px', lineHeight:'26px'}}>Start Now</button>
        </div>
      </div>
    </>
  )
}

export default LandingFooterOne;