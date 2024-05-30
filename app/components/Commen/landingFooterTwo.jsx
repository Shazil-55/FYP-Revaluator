import React from 'react'
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';


const LandingFooterTwo = () => {
  return (
    <>
      {/*Top div*/}
      <div className="flex items-center justify-between" style={{height:'60%', width:'90%'}}>

        {/*Logo and button*/}
        <div className="flex flex-col justify-between" style={{width:'298px', height:'90%'}}>
          <div className="mt-3"><img src="/footerImage.svg" alt="" /></div>
          <button className="text-white px-4 py-2 rounded-full text-xl tracking-wide flex items-center justify-center" style={{backgroundColor:'#EC9521', height:'40px', width:'140px',fontFamily:'Manrope', fontSize:'16px', lineHeight:'26px'}}>Contact Us</button>
        </div>

        {/*product*/}
        <div style={{width:'89px', height:'90%'}}>
          <p style={{color:'#DEE1E6', fontFamily:'Lexend', fontWeight:'bold', fontSize:'20px', lineHeight:'50px'}}>Product</p>
          <a href="#" style={{color:'#DEE1E6', fontFamily:'Manrope', fontSize:'14px', lineHeight:'28px',cursor:'pointer', display:'inline-block',textDecoration:'none'}}>Our Solution</a>
          <a href="#" style={{color:'#DEE1E6', fontFamily:'Manrope', fontSize:'14px', lineHeight:'28px',cursor:'pointer',display:'inline-block',textDecoration:'none'}}>How it works?</a>
          <Link href="/appPages/landingPageTwo" style={{color:'#DEE1E6', fontFamily:'Manrope', fontSize:'14px', lineHeight:'28px',cursor:'pointer',display:'inline-block',textDecoration:'none'}}>Pricing Plan</Link>
        </div>

        {/*resources*/}
        <div style={{width:'103px', height:'90%'}}>
          <p style={{color:'#DEE1E6', fontFamily:'Lexend', fontWeight:'bold', fontSize:'20px', lineHeight:'50px'}}>Resources</p>
          <a href="#" style={{color:'#DEE1E6', fontFamily:'Manrope', fontSize:'14px', lineHeight:'28px',cursor:'pointer',display:'inline-block',textDecoration:'none'}}>Blog</a>
          <a href="#" style={{color:'#DEE1E6', fontFamily:'Manrope', fontSize:'14px', lineHeight:'28px',cursor:'pointer',display:'inline-block',textDecoration:'none'}}>User guides</a>
          <a href="#" style={{color:'#DEE1E6', fontFamily:'Manrope', fontSize:'14px', lineHeight:'28px',cursor:'pointer',display:'inline-block',textDecoration:'none'}}>Our Team</a>
        </div>
        
        {/*company*/}
        <div style={{width:'98px', height:'90%'}}>
          <p style={{color:'#DEE1E6', fontFamily:'Lexend', fontWeight:'bold', fontSize:'20px', lineHeight:'50px'}}>Company</p>
          <a href="#" style={{color:'#DEE1E6', fontFamily:'Manrope', fontSize:'14px', lineHeight:'28px',cursor:'pointer',display:'block',textDecoration:'none'}}>About</a>
          <a href="#" style={{color:'#DEE1E6', fontFamily:'Manrope', fontSize:'14px', lineHeight:'28px',cursor:'pointer',display:'inline-block', textDecoration:'none'}}>Join us</a>
        </div>
        
        {/*newsletter*/}
        <div style={{width:'407px', height:'90%'}}>
          <p style={{color:'#EC9521', fontFamily:'Lexend', fontSize:'20px', lineHeight:'50px'}}>Subscribe to our newsletter</p>
          <p style={{color:'#DEE1E6', fontFamily:'Manrope', fontSize:'12px', lineHeight:'5px'}}>For product announcements and exclusive insights</p>
          
          <div className='flex items-center justify-start' style={{marginTop:'30px'}}>
            <input type="email" placeholder="Your email address" 
              style={{fontFamily:'Manrope',border: 'none', width: '269px', height:'35px', paddingLeft: '43px', color: '#DEE1E6', fontSize: '14px', lineHeight: '22px', backgroundColor: '#1D1D1D' , borderRadius:'4px 0px 0px 4px',
                backgroundImage: 'url("/mailIcon.svg")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '10px center', // Adjusted background position to align icon
                backgroundSize: '20px 20px' // Adjusted background size to fit the icon
              }} 
            />
            <button className="text-white px-4 py-2 rounded-full text-xl tracking-wide flex items-center justify-center" style={{backgroundColor:'#EC9521', height:'36px', width:'114px',fontFamily:'Manrope', fontSize:'16px'}}>Subscribe</button>
          </div>
        </div>

      </div>

      {/*Bottom div*/}
      <div className="flex items-center justify-between" style={{height:'10%', width:'90%'}}>

        {/*space*/}
        <div style={{width:'200px'}}></div>

        {/*copy right*/}
        <div style={{display:'inline-block', width:'400px'}}>
          <p style={{fontFamily:'Manrope', fontSize:'14px', lineHeight:'22px', color:'#DEE1E6'}}>© 2024 Brand, Inc.  <span style={{marginLeft:'8px'}}></span> •Privacy <span style={{marginLeft:'8px'}}></span> •Terms <span style={{marginLeft:'8px'}}></span> •Sitemap</p>
        </div>

        {/*social media icons*/}
        <div className='flex flex-row justify-between' style={{width:'150px'}}>
          <img src="/twitter.svg" alt="" />
          <img src="/footerFacebook.svg" alt="" />
          <img src="/footerLinkedIn.svg" alt="" />
          <img src="/youtube.svg" alt="" />
        </div>
      </div>
    </>
  )
}

export default LandingFooterTwo;