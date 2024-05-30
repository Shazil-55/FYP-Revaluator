'use client';
import React, { useState } from 'react';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    // Your form data fields here
    email: '',
    password: '',
    // Add more fields as needed
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    if (isSignUp) {
      // Handle sign up
      console.log('Signing up with:', formData);
      // After sign up logic, switch to login form
      setIsSignUp(false);
    } else {
      // Handle login
      console.log('Logging in with:', formData);
      // Logic for login
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const redirectToGoogle = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <div className="flex justify-center items-center min-h-screen  bg-right" style={{ backgroundImage: "url('/test-2.png')", backgroundRepeat:'no-repeat', overflow:'hidden', color:'#005a00'}}>
      <div className=" max-w-sm w-full p-8 rounded-lg md:ml-0 md:mr-auto md:w-96" style={{background:'#bfffbf'}}>
        <h2 className="text-2xl mb-20 text-center font-semibold">{isSignUp ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={handleFormSubmit}>
          {/* Your form fields */}
          <input
            type="email"
            id="email"
            placeholder="Email"
            autoComplete="nope"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className=" text-black w-full px-3 py-4 rounded-lg mb-4" style={{background:'#bfffbf',border:'2px solid #436f70'}}
            required
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            autoComplete="off"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className=" text-black w-full px-3 py-4 rounded-lg " style={{background:'#bfffbf', border:'2px solid #436f70', marginBottom:'6rem'}}
            required
          />
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <button onClick={redirectToGoogle} className="group h-12 px-6  rounded-full transition duration-300 hover:bg-green-800 mb-2 md:mb-0" style={{border:'2px solid #436f70'}}>
              <div className="relative flex items-center space-x-4 justify-center">
                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                <span style={{ width: '5px' }}></span>
                <span className="block w-max font-semibold tracking-wide text-green-600 text-sm transition duration-300 group-hover:text-white sm:text-base">Google</span>
              </div>
            </button>

            <button className="group h-12 px-6 rounded-full transition duration-300  hover:border-green-50" style={{backgroundColor:'#276749'}}>
              <div className="relative flex items-center space-x-4 justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute left-0 w-5 text-white" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                <span style={{ width: '5px' }}></span>
                <span className="block w-max font-semibold tracking-wide text-white text-sm transition duration-300 group-hover:text-black sm:text-base">Github</span>
              </div>
            </button>
          </div>
          {/* Additional fields for sign up */}
          {isSignUp && (
            <>
              {/* Additional sign up fields */}
              {/* For example: */}
              {/* <input type="text" placeholder="Name" /> */}
            </>
          )}
          <button type="submit" className=" hover:bg-gray-700 text-black w-full py-4 rounded-lg mb-4" style={{background:'#80ff80'}}>
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <p className='text-center'>
          {isSignUp ? 'Already have an account?' : 'Don\'t have an account?'}
          <span style={{ margin: '0 10px' }}></span>
          <button onClick={toggleForm} className="text-gray-400">
            {isSignUp ? 'Login' : 'Sign Up'}
          </button>
        </p>

      </div>
    </div>
  );
};

export default AuthForm;
