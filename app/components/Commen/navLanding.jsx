import React ,{useState}from 'react'
import Link from 'next/link';

const Navbar = ({onShowLoginPage}) => {

 

    return (
      <div className="flex items-center justify-between " style={{height: '120px'}}>
        {/* Logo */}
        <div className="ml-8 text-2xl font-bold mt-4">
          <img style={{width:'370px'}} src="/logo.svg" alt="Logo" />
        </div>
  
        {/* Menu Items */}
        <div className="flex items-center mr-8">
          {/* Navigation Links */}
          <Link href="#" className="mr-6 text-base font-semibold tracking-wide" style={{color:'#0A273E', fontFamily:'Manrope',textDecoration:'none'}}>Home</Link>
          <Link href="#" className="mr-6 text-base font-semibold tracking-wide" style={{color:'#0A273E',fontFamily:'Manrope',textDecoration:'none'}}>Our Solution</Link>
          <Link href="#" className="mr-6 text-base font-semibold tracking-wide" style={{color:'#0A273E',fontFamily:'Manrope',textDecoration:'none'}}>About Us</Link>
          <Link href="/appPages/landingPageTwo" className="mr-6 text-base font-semibold tracking-wide" style={{color:'#0A273E',fontFamily:'Manrope',textDecoration:'none'}}>Pricing</Link>
          <Link href="#" className="mr-6 text-base font-semibold tracking-wide" style={{color:'#0A273E',fontFamily:'Manrope',textDecoration:'none'}}>Contact Us</Link>
          
          {/* Register Button */}
          <Link           
            href='/appPages/loginForm' 
            className="text-white px-4 py-2 rounded-full text-xl flex items-center justify-center hover:no-underline" 
            style={{backgroundColor:'#EC9521', height:'56px', width:'200px',fontFamily:'Lexend', fontWeight:'bold'}}>
            Register
          </Link>
        
        </div>
      </div>
    );
  };
  
  export default Navbar;
  
