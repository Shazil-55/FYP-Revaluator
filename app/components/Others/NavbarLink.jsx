// NavbarLink.js
import React from 'react';

const NavbarLink = ({ iconText, labelText, onClick }) => {
  return (
    <a href="#" className="mb-4 flex flex-col items-center " onClick={onClick}>
      <span className="bg-yellow-900 h-12 w-12 flex items-center justify-center text-white font-bold text-lg rounded-full hover:bg-gray-700 transition duration-300 ">{iconText}</span>
      <span className="mt-1 text-center text-white" style={{ fontSize: '12px' }}>{labelText}</span>
    </a>
  );
};

export default NavbarLink;
