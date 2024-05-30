// components/HomePage.js
"use client";

// components/HomePage.js
import React, { useEffect, useState } from 'react';
import Login from "../../appPages/login/page"
import SignUpPage from "../../appPages/signup/page"

const NewHomePage = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/picHome.png", "/pivAi1.jpg", "/pivAi2.jpg", "/test-1.png"];
  const toggleSignupModal = () => {
    setShowSignup(!showSignup);
  };
  const toggleLoginModal = () => {
    setShowLogin(!showLogin);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
    }, 4000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 bg-cover bg-center flex items-center justify-center relative overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute top-50% left-0 w-full h-auto max-h-full transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <div className="md:w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col justify-center items-center text-white">
        <h1 className="text-7xl font-bold mb-8 transition duration-500 border-b-4 border-transparent hover:border-white">
          Revaluator
        </h1>
        <p className="text-lg mb-12">
          The AI Recruiter
        </p>
        <div className="flex space-x-4">
          <button onClick={toggleLoginModal} className="bg-white text-blue-500 px-8 py-3 rounded-md font-semibold hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out">
            Login
          </button>
          <button onClick={toggleSignupModal} className="bg-blue-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300 ease-in-out">
            Sign Up
          </button>
        </div>
      </div>
      {showSignup && <SignUpPage onClose={toggleSignupModal} />}
      {showLogin && <Login onClose={toggleLoginModal} />}
    </div>
  );
};

export default NewHomePage;
