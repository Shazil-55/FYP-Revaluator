'use client';
import React ,{useState} from 'react'
import Link from 'next/link';
import ExamInstructions from '../examInstracution/page';


const SignUpPage = () => {

  const [isPasswordShown, setIsPasswordShown] = useState(false);

  
  const togglePasswordVisibility = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <div className='flex flex-col items-start justify-center' style={{ width: '100%', height: '100vh', background: '#FFFFFF', backgroundImage: 'url("/loginPageImage.svg")', backgroundSize: 'contain', backgroundPosition: 'left', backgroundRepeat: 'no-repeat' , backgroundSize:'90% 90%'}}>
        <div style={{ marginLeft: '28px', position: 'relative' }}>
          <p style={{ position: 'absolute', top: '90px', left: '100px',width:'312px', fontFamily: 'Moul', fontSize: '28px', lineHeight: '28px', color: '#EC9521' }}>The AI Recruiter</p>
          <img src="/output.png" alt="" />
        </div>

        <div style={{ position: 'relative', margin: '0 auto', width: '95%', height: '550px' }}>
            <div  style={{ position: 'absolute', top: '-34%', left: '77%', transform: 'translateX(-50%)',width: '451px', height: '550px', backgroundColor: 'rgba(249, 218, 178, 0.5)', borderRadius: '4px' }}>
              <p className='text-center mt-4' style={{color:'#171A1F', fontFamily:'Lexend', fontWeight:'bold', fontSize:'32px', lineHeight:'48px'}}>Sign up</p>
              {/*Firt name and last name*/}
              <div className='flex items-center justify-around'>
                <div  className='flex flex-col mb-3' style={{width:'42%'}}>
                  <p className='-mb-0' style={{fontFamily:'Manrope', fontWeight:'bold', fontSize:'14px', lineHeight:'22px', color:'#181B22'}}>First Name</p>
                  <input type="email" placeholder="Input First Name" 
                    style={{fontFamily:'Manrope', backgroundColor:'#F3F4F6',border: 'none', width: '100%', height:'35px', paddingLeft: '13px', color: '#171A1F', fontSize: '13px', lineHeight: '22px' , borderRadius:'4px',
                    
                    }} 
                  />
                </div>
                <div  className='flex flex-col mb-3' style={{width:'42%'}}>
                  <p className='-mb-0' style={{fontFamily:'Manrope', fontWeight:'bold', fontSize:'14px', lineHeight:'22px', color:'#181B22'}}>Last Name</p>
                  <input type="email" placeholder="Input Last Name" 
                    style={{fontFamily:'Manrope', backgroundColor:'#F3F4F6',border: 'none', width: '100%', height:'35px', paddingLeft: '13px', color: '#171A1F', fontSize: '13px', lineHeight: '22px' , borderRadius:'4px',
                    
                    }} 
                  />
                </div>
              </div>

              {/*emil field*/}
              <div  className='flex flex-col mb-3' style={{width:'92%', margin:'0 auto'}}>
                <p className='-mb-0' style={{fontFamily:'Manrope', fontWeight:'bold', fontSize:'14px', lineHeight:'22px', color:'#181B22'}}>Email:</p>
                <input type="email" placeholder="Enter your email" 
                  style={{fontFamily:'Manrope', backgroundColor:'#F3F4F6',border: 'none', width: '100%', height:'35px', paddingLeft: '13px', color: '#171A1F', fontSize: '13px', lineHeight: '22px' , borderRadius:'4px',
                   
                  }} 
                />
              </div>
              {/*password field*/}
              <div className='flex flex-col mb-4' style={{ width:'92%', margin:'0 auto'}}>
                <p className='-mb-0' style={{
                    fontFamily:'Manrope', 
                    fontWeight:'bold', 
                    fontSize:'14px', 
                    lineHeight:'22px', 
                    color:'#181B22'
                  }}>Password
                </p>
                <div style={{ position: 'relative' }}>
                  <input type={isPasswordShown ? "text" : "password"} 
                    placeholder="Enter at least 8+ characters" 
                    style={{
                      fontFamily:'Manrope', 
                      backgroundColor:'#F3F4F6',
                      border: 'none', 
                      width: '100%', 
                      height:'35px', 
                      paddingLeft: '13px', 
                      color: '#171A1F', 
                      fontSize: '13px', 
                      lineHeight: '22px', 
                      borderRadius:'4px',
                      
                    }} 
                  />
                  <i onClick={togglePasswordVisibility} 
                    className={`fa ${isPasswordShown ? 'fa-eye-slash' : 'fa-eye'}`} 
                    style={{
                      position: 'absolute', 
                      right: '10px', 
                      top: '50%', 
                      transform: 'translateY(-50%)', 
                      cursor: 'pointer'
                    }}
                  />
                </div>
              </div>
              {/*terms and policy*/}
              <div className='flex items-center justify-between mb-2' style={{width:'92%', margin:'0 auto'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <input type="checkbox" name="" id="" />
                  <div style={{color:'#171A1F',fontFamily:'Lexend', fontSize:'12px', lineHeight:'22px'}} className='ml-1'>By signing up, I agree with the </div>
                  <div className='ml-1' style={{color:'#6D31ED',fontFamily:'Lexend', fontSize:'12px', lineHeight:'22px', fontWeight:'bold'}}>Terms of Use </div>
                  <div className='ml-1'style={{color:'#171A1F',fontFamily:'Lexend', fontSize:'12px', lineHeight:'22px'}}>&</div>
                  <div className='ml-1' style={{color:'#6D31ED',fontFamily:'Lexend', fontSize:'12px', lineHeight:'22px',fontWeight:'bold'}}>Privacy Policy</div>
                </div>
              </div>
              {/*sign up button*/}
              <Link href="/appPages/examInstracution" className='flex items-center justify-center hover:no-underline' style={{background:'#EC9521',width:'90%', margin:'0 auto', height:'44px', borderRadius:'4px', color:'#FFFFFF', fontFamily:'Manrope', fontWeight:'bold', fontSize:'20px', lineHeight:'26px',cursor: 'pointer'}}>Exam instruction</Link>
              {/*Dont have... */}
              <div className='flex items-start justify-center mt-2'>
                <p style={{display:'inline-block', color:'#171A1F', fontFamily:'Lexend', fontSize:'14px', lineHeight:'22px', }}>Already have an account?</p>
                <a className='ml-1' style={{cursor:'pointer',display:'inline-block',color:'#6D31ED' , fontFamily:'Lexend', fontSize:'14px', lineHeight:'22px'}}  href='/appPages/loginForm'>Sign Up</a>
              </div>
              {/*--- OR ----*/}
              <div className='flex items-center justify-evenly mt-1 '>
                <div style={{border:'1px solid white', width:'180px'}}></div>
                <div style={{color:'#565D6D', fontFamily:'Lexend', fontSize:'14px', lineHeight:'22px'}}>OR</div>
                <div style={{border:'1px solid white', width:'180px'}}></div>
              </div>
              {/*social media icons*/}
              <div className='flex items-center justify-between mt-4' style={{width:'92%', margin:'0 auto'}}>
                <div className='flex items-center justify-between' style={{width:'155px', margin:'0 auto'}}>
                  <a href="https://www.google.com">
                    <img src="/googleLoginIcon.svg" alt=""/>
                  </a>
                  <a href="https://www.google.com">
                    <img src="/fbLoginIcon.svg" alt="" />
                  </a>
                  <a href="https://www.google.com">
                    <img src="/appleLoginIcon.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
           
        </div>
        <div style={{ position: 'relative', margin: '0 auto', width: '92%', height: '400px' }}>
            <div style={{ position: 'absolute', top: '-140%', left: '49%', transform: 'translateX(-50%)', width: '200px', height: '291px', borderRadius: '4px'}}>
              <img src="/signUpImage.svg" alt="" />
            </div>
        </div>
       
    </div>

  )
}

export default SignUpPage