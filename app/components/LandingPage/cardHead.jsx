import React from 'react'

const CardHead = () => {
  return (
    <div
        className='flex justify-between items-center p-0'
        style={{
        width: '650px',
        height: '194px',
        }}
        >
        {/* Three nested divs with a width of 224px */}
        <div className='flex justify-center items-center' style={{ width: '224px', height: '100%'}}>
            <div className='flex flex-col justify-between items-start rounded-2xl px-2 py-2' style={{width:'194px', height:'144px', border:'2px solid white', background:'#E6E7D1'}}>             
                <div>
                    <img src="/heart1.svg" alt="" />
                </div>
                <div style={{ fontSize: '14px' }}>
                    Lorem ipsum dolor sit amet,<br /> 
                    consectetu adipiscing elit.<br />
                    Cursus imperdiet sed id.
                </div>
            </div>
        </div>       
        <div className='flex justify-center items-center' style={{ width: '224px', height: '100%' }}>
            <div className='flex flex-col justify-between items-start rounded-2xl px-2 py-2' style={{width:'194px', height:'144px', border:'2px solid white', background:'#E6E7D1'}}>             
                <div>
                    <img src="/heart2.svg" alt="" />
                </div>
                <div style={{ fontSize: '14px' }}>
                    Lorem ipsum dolor sit amet,<br /> 
                    consectetu adipiscing elit.<br />
                    Cursus imperdiet sed id.
                </div>
            </div>
        </div>        
        <div className='flex justify-center items-center' style={{ width: '224px', height: '100%' }}>
            <div className='flex flex-col justify-between items-start rounded-2xl px-2 py-2' style={{width:'194px', height:'144px', border:'2px solid white', background:'#E6E7D1'}}>             
                <div>
                    <img src="/heart3.svg" alt="" />
                </div>
                <div style={{ fontSize: '14px' }}>
                    Lorem ipsum dolor sit amet,<br /> 
                    consectetu adipiscing elit.<br />
                    Cursus imperdiet sed id.
                </div>
            </div>
        </div>
        
  </div>
  )
}

export default CardHead
