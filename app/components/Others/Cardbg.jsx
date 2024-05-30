// Card.js
'use client';
import React from 'react';
import { useState } from 'react';

const Card = ({ title, content, heading }) => {

  return (
    <div className="bg-yellow-200 rounded-lg shadow-md p-4 mb-4 h-full">
       <div className="bg-yellow-600" style={{width:'100%', background:'orange', color:'white', borderRadius:'5px', padding:'10px', height:'15%'}}>
        <p style={{fontSize:'30px', padding:'10px', fontWeight:'bold'}}>{heading}</p>
        </div> 
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <div className="overflow-y-auto">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
