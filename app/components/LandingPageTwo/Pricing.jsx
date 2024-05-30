import React, { useState } from 'react';
import '@/app/styles/pricingCustom.css'; // Import CSS file
import '@/app/styles/toggleButton.css'; // Import CSS file
import ToggleButton from '@/app/components/LandingPageTwo/pricing/toggleButton';

const Pricing = () => {
  const [selectedPricing, setSelectedPricing] = useState('monthly');

  const handlePricingChange = (value) => {
    setSelectedPricing(value);
  };

  return (
    <>
      <div className='text-center'>
        <p style={{color:'#FFFFFF',fontFamily:'Lexend', fontWeight:'bold', fontSize:'48px', lineHeight:'68px', paddingTop:'90px'}}>Pricing</p>
        <p style={{color:'#323743', fontFamily:'Manrope', fontSize:'18px', lineHeight:'28px'}}>Officia exercitation quis voluptate elit consequat nostrud</p>
      </div>
      <div className='flex items-center justify-center'>
        <ToggleButton onChange={handlePricingChange} />
      </div>
      <div className="container promo-container" style={{width:'1000px'}}>
        <div className="promos bg-base-1">
          <div className="promo first" style={{background:'#F8F9FA', borderRadius:'4px 0px 0px 4px'}}>
            <h4 className="heading heading-5 strong-600 text-left pl-4" style={{color:'#171A1F', fontFamily:'Lexend', fontWeight:'bold', fontSize:'27px', lineHeight:'35px'}}>Personal</h4>
            <ul className="features">
              <li className="brief text-left pl-4" style={{color:'#424856', fontFamily:'Manrope', fontSize:'14px', lineHeight:'20px'}}>Perfect for side or hobby projects</li>
              <li className='text-left mt-2' style={{color:'#424856',paddingLeft:'100px' ,fontFamily:'Manrope', fontSize:'14px'}}>{selectedPricing === 'monthly' ? '/month' : '/annually'}</li>
              <li className="text-left pl-4 mb-4" style={{color:'#171A1F', fontFamily:'Lexend', fontWeight:'bold', fontSize:'40px', lineHeight:'16px'}}>{selectedPricing === 'monthly' ? '$50' : '$600'}</li>
              <div className='flex pl-3'>
                <img src="/circleTick.svg" alt="" />
                <li className='text-left pl-2' style={{color:'#171A1F', fontFamily:'Manrope', fontSize:'13px', lineHeight:'22px'}}>Up to 5 users</li>
              </div>
              <div className='flex pl-3'>
                <img src="/circleTick.svg" alt="" />
                <li className='text-left pl-2' style={{color:'#171A1F', fontFamily:'Manrope', fontSize:'13px', lineHeight:'22px'}}>Collaboration features</li>
                <img className='pl-3' src="/helpIcon.svg" alt="" />
              </div>
              <div className='flex pl-3'>
                <img src="/crossIcon.svg" alt="" />
                <li className='text-left pl-2' style={{color:'#171A1F', fontFamily:'Manrope', fontSize:'13px', lineHeight:'22px'}}>Smart analytics</li>
              </div>
              <div className='flex pl-3'>
                <img src="/crossIcon.svg" alt="" />
                <li className='text-left pl-2' style={{color:'#171A1F', fontFamily:'Manrope', fontSize:'13px', lineHeight:'22px'}}>30-day free trial</li>
              </div>
              <li className="buy">
                <button style={{width:'220px', height:'40px', borderRadius:'12px',outline: '1px solid #EC9521', color:'#EC9521', fontFamily:'Manrope', fontSize:'16px', lineHeight:'26px'}}>Select Plan</button>
              </li>
            </ul>
          </div>

          <div className="promo second" style={{background:'#F8F9FA', borderRadius:'4px'}}>
            <h4 className="heading heading-5 strong-600 text-left" style={{paddingLeft:'60px',color:'#171A1F', fontFamily:'Lexend', fontWeight:'bold', fontSize:'27px', lineHeight:'35px'}}>Organization</h4>
            <ul className="features">
              <li className="brief text-left" style={{paddingLeft:'60px',color:'#424856', fontFamily:'Manrope', fontSize:'14px', lineHeight:'20px'}}>Perfect for organizations</li>
              <li className='text-left mt-2' style={{color:'#424856',paddingLeft:'150px' ,fontFamily:'Manrope', fontSize:'14px'}}>{selectedPricing === 'monthly' ? '/user/month' : '/user/annually'}</li>
              <li className="text-left pl-8 mb-4" style={{paddingLeft:'60px',color:'#171A1F', fontFamily:'Lexend', fontWeight:'bold', fontSize:'40px', lineHeight:'16px'}}>{selectedPricing === 'monthly' ? '$150' : '$1800'}</li>
              <div className='flex' style={{paddingLeft:'50px'}}>
                <img src="/circleTick.svg" alt="" />
                <li className='text-left' style={{paddingLeft:'10px',color:'#171A1F', fontFamily:'Manrope', fontSize:'13px', lineHeight:'22px'}}>Unlimited users</li>
              </div>
              <div className='flex' style={{paddingLeft:'50px'}}>
                <img src="/circleTick.svg" alt="" />
                <li className='text-left' style={{paddingLeft:'10px',color:'#171A1F', fontFamily:'Manrope', fontSize:'13px', lineHeight:'22px'}}>Collaboration features</li>
              </div>
              <div className='flex' style={{paddingLeft:'50px'}}>
                <img src="/circleTick.svg" alt="" />
                <li className='text-left' style={{paddingLeft:'10px',color:'#171A1F', fontFamily:'Manrope', fontSize:'13px', lineHeight:'22px'}}>Smart analytics</li>
              </div>
              <div className='flex' style={{paddingLeft:'50px'}}>
                <img src="/circleTick.svg" alt="" />
                <li className='text-left' style={{paddingLeft:'10px',color:'#171A1F', fontFamily:'Manrope', fontSize:'13px', lineHeight:'22px'}}>30-day free trial</li>
              </div>
              <li className="buy">
                <button style={{width:'220px', height:'40px', borderRadius:'12px',outline: '1px solid #EC9521', color:'#EC9521', fontFamily:'Manrope', fontSize:'16px', lineHeight:'26px'}}>Contact Sale</button>
              </li>
            </ul>
          </div>

          <div className="promo third scale" style={{background:'#F8F9FA', borderRadius:'4px'}}>
            <div className='flex items-center justify-between pr-4'>
              <h4 className="heading heading-5 strong-600 text-left" style={{paddingLeft:'20px',color:'#EC9521', fontFamily:'Lexend', fontWeight:'bold', fontSize:'27px', lineHeight:'35px'}}>Startup</h4>
              <button style={{paddingLeft:'5px',paddingRight:'5px',width:'59px', height:'28px', color:'#FFFFFF', fontFamily:'Manrope', fontSize:'12px', lineHeight:'20px', background:'#0A273E', borderRadius:'14px'}}>Popular</button>
            </div>
            <ul className="features">
              <li className="brief text-left" style={{paddingLeft:'20px',color:'#424856', fontFamily:'Manrope', fontSize:'14px', lineHeight:'20px'}}>Perfect for small teams</li>
              <li className='text-left mt-2' style={{color:'#424856',paddingLeft:'150px' ,fontFamily:'Manrope', fontSize:'14px'}}>{selectedPricing === 'monthly' ? '/team/month' : '/team/annually'}</li>
              <li className="text-left pl-8 mb-4" style={{paddingLeft:'20px',color:'#171A1F', fontFamily:'Lexend', fontWeight:'bold', fontSize:'40px', lineHeight:'16px'}}>{selectedPricing === 'monthly' ? '$100' : '$1200'}</li>
              <div className='flex' style={{paddingLeft:'50px'}}>
                <img src="/circleTick.svg" alt="" />
                <li className='text-left' style={{paddingLeft:'10px',color:'#171A1F', fontFamily:'Manrope', fontSize:'13px', lineHeight:'20px'}}>Unlimited users</li>
              </div>
              <div className='flex' style={{paddingLeft:'50px'}}>
                <img src="/circleTick.svg" alt="" />
                <li className='text-left' style={{paddingLeft:'10px',color:'#171A1F', fontFamily:'Manrope', fontSize:'13px', lineHeight:'20px'}}>Collaboration features</li>
              </div>
              <div className='flex' style={{paddingLeft:'50px'}}>
                <img src="/circleTick.svg" alt="" />
                <li className='text-left' style={{paddingLeft:'10px',color:'#171A1F', fontFamily:'Manrope', fontSize:'13px', lineHeight:'20px'}}>Smart analytics</li>
              </div>
              <div className='flex' style={{paddingLeft:'50px'}}>
                <img src="/circleTick.svg" alt="" />
                <li className='text-left' style={{paddingLeft:'10px',color:'#171A1F', fontFamily:'Manrope', fontSize:'13px', lineHeight:'20px'}}>30-day free trial</li>
              </div>
              <li className="buy">
                <button style={{width:'285px', height:'40px', borderRadius:'20px',outline: '1px solid #EC9521', background:'#EC9521',color:'white', fontFamily:'Manrope', fontSize:'16px', lineHeight:'26px'}}>Upgrade</button>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
};

export default Pricing;
