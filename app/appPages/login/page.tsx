'use client';
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '@/app/firebase/config'
import { useRouter } from "next/navigation";

interface LoginPageProps {
  onClose: () => void; // Explicitly define the type
}

const Login = ({ onClose } : LoginPageProps) =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      console.log("inside");
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res });
      setEmail('');
      setPassword('');
      router.push('/homep')
    } catch (e) {
      console.error("Errors : ", e)
    }
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
    <div className="w-1/3 p-6 rounded-md shadow-md lg:max-w-lg bg-blue-950" style={{width:'30%'}}>
    <img src="/login.png" alt="Logo" className="mx-auto filter invert" width={'150px'} />

      <form className="mt-6">
        <div className="mb-1">
          <label
            htmlFor="email"
            className="block ml-8 text-sm font-semibold text-white mb-1"
          >
            Email
          </label>
          <input
            id="email"
            autoComplete="email"
            placeholder="email"
            required
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            type="email"
            className=" text-white w-4/5 px-3 py-3 ml-8 bg-transparent border border-gray-600 rounded-lg mb-4" 
            />
        </div>
        <div className="mb-1">
          <label
            htmlFor="password"
            className="block text-sm ml-8 font-semibold text-white mb-1"
          >
            Password
          </label>
          <input
            id="password"
            placeholder="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            type="password"
            required
            className=" text-white w-4/5  px-3 py-3 ml-8 rounded-lg mb-4 bg-transparent border border-gray-600"
          />
        </div>
        <div className="mt-2">
          <button onClick={handleSignIn} className="w-4/5 ml-8  px-4 py-2 tracking-wide text-blue-950 transition-colors bg-yellow-400 duration-200 transform  rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-gray-600">
            Sign In
          </button>
        </div>
      </form>

      <div className="relative flex items-center justify-center w-full mt-6 border border-t">
        <div className="absolute px-5 bg-white rounded-full">Or</div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={() => signIn("google")}
          className="flex items-center justify-center p-2 rounded-full focus:ring-2 focus:ring-offset-1  hover:border-none transition-colors duration-300"
        >
          <img
            src="/google.png" // Replace "/path/to/google.png" with the actual path to your Google icon
            alt="Google"
            className="w-6 h-6 mr-2 hover:w-7 hover:h-7"
          />
        </button>
          <span style={{width:'5px'}}></span>
        <button
          className="flex items-center justify-center p-2   rounded-3xl focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
        >
          <img
            src="/github.png" 
            alt="GitHub"
            className="w-6 h-6 mr-2 mx-auto filter invert  hover:w-7 hover:h-7"
          />
        </button>
      </div>


      <button onClick={onClose} className="absolute top-4 right-4 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
  );
};

export default Login;

