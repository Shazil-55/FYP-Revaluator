'use client';
import Link from 'next/link'
import React, {useState} from 'react'
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import auth from '@/app/firebase/config'
import { useRouter } from 'next/navigation';


interface SignupPageProps {
  onClose: () => void; // Explicitly define the type
}

const SignUpPage = ({ onClose } : SignupPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignUp = async() => {
    
  }
  return (
    <div> 
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
      <div className="w-1/3 p-6 bg-yellow-400 rounded-md shadow-md lg:max-w-xl" style={{width:'30%'}}>
      <img src="/sign-up.png" alt="Logo" className="mx-auto mt-6"  width={'100px'}/>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block ml-8 text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="email"
              autoComplete='email'
              required
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              className="block ml-8 w-4/5 px-4 py-2 mt-2 text-gray-700 bg-transparent border border-black rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block ml-8 text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="password"
              autoComplete="current-password"
              value={password}
              required
              onChange={(e)=>{setPassword(e.target.value)}}
              className="block w-4/5 ml-8 px-4 py-2 mt-2 text-gray-700 bg-transparent border border-black rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="ml-8 mt-10">
            <button onClick ={handleSignUp} className="w-4/5 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-950 rounded-md hover:bg-blue-900 focus:outline-none focus:bg-gray-600"style={{width:'88%'}}>
              Sign Up
            </button>
          </div>
        </form>

        <div className="relative flex items-center justify-center w-full mt-6 border  border-black border-t">
          <div className="absolute px-5 bg-black rounded-full text-white">Or</div>
        </div>
        <div className="flex justify-center mt-4">
        <button
          type="button"
          className="flex items-center justify-center p-2 rounded-full focus:ring-2 focus:ring-offset-1  hover:border-none transition-colors duration-300"
        >
          <img
            src="/google.png" // Replace "/path/to/google.png" with the actual path to your Google icon
            alt="Google"
            className="w-6 h-6 mr-2 hover:w-7 hover:h-7"
          />
        </button>
          <span style={{width:'2px'}}></span>
        <button
          className="flex items-center justify-center p-2   rounded-3xl focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
        >
          <img
            src="/github.png" 
            alt="GitHub"
            className="w-6 h-6 mr-2  hover:w-7 hover:h-7"
          />
        </button>
      </div>
      </div>
      <button onClick={onClose} className="absolute top-4 right-4 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    </div>
  )
}

export default SignUpPage
