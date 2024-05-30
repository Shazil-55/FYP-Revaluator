import React from 'react'

const ThankYouScreen = () => {
  return (
    <div className='flex items-center justify-center' style={{background:'#EDEDEE',width:'100%', border:'1px solid white', height:'100vh'}}>
        <div style={{width:'1200px', height:'80%'}}>
            <img src="/thankYou.svg" alt="" style={{width: '100%', height: '100%', objectFit: 'cover',borderRadius: '10px',boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'}}/>
            <div style={{backgroundColor:'#FEFEFE',position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '82%', height: '65%',borderRadius: '20px'}}>
                <div className='flex flex-col items-center justify-between mt-5'>
                    <p style={{color:'#EC9521', fontFamily:'Caveat Brush', fontSize:'60px', lineHeight:'42px'}}>Thank You</p>
                    <p style={{color:'#0A273E', fontFamily:'Manrope', fontSize:'17px', lineHeight:'20px', fontWeight:'bold'}}>Your test has been Submitted</p>
                </div>
                <div className='flex items-center justify-center mt-4' style={{margin:'0 auto', width:'500px', height:'150px', borderRadius:'20px'}}>
                    <img src="/footerImage.svg" alt="" style={{width:'450px'}}/>
                </div>
                <div className='flex items-center justify-center mt-4' >
                    <p style={{color:'#0A273E', fontFamily:'Manrope', fontSize:'15px', lineHeight:'14px'}}>We will inform you later in the provided email of your selection status</p>
                </div>
                <img src="/thankYouStar.svg" alt="" style={{position: 'absolute', top: '30%', left: '18%',}}/>
                <img src="/thankYouStar.svg" alt="" style={{position: 'absolute', top: '20%', left: '68%',}}/>
                <img src="/thankYouCircle.svg" alt="" style={{position: 'absolute', top: '15%', left: '32%',}}/>
                <img src="/thankYouCircle.svg" alt="" style={{position: 'absolute', top: '10%', left: '82%',}}/>
                <img src="/thankYouCircle1.svg" alt="no" style={{position: 'absolute', top: '56%', left: '78%',}}/>


             </div>
        </div>
    </div>
  )
}

export default ThankYouScreen