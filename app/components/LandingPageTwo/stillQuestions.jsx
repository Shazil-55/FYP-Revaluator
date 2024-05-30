import React from 'react'

const StillQuestions = () => {
  return (
    <>
        <div className='flex items-center' style={{height:'384px', width:'1176px'}}>

            {/*left content*/}
            <div  className='flex flex-col items-start justify-center pl-16'  style={{height:'100%',width:'50%', background:'#0A273E', borderRadius:'8px 0px 0px 8px'}}>
                <p style={{color:'#FFFFFF', fontFamily:'Lexend', fontWeight:'bold', fontSize:'40px', lineHeight:'56px'}}>Still having questions?</p>
                <button className="text-white px-4 py-2 text-xl tracking-wide font-semibold mt-3" style={{backgroundColor:'#EC9521', height:'52px', width:'150px',fontFamily:'Manrope', borderRadius:'26px', fontSize:'18px'}}>Contact Us</button>
            </div>

            {/*Image*/}
            <div style={{width:'50%'}}>
                <img src="/stillHavingQues.svg" alt="" />
            </div>
        </div>
    </>
  )
}

export default StillQuestions