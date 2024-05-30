// QuestionList.js
'use client';
import React from 'react';
import "@/app/styles/scrollbar.css"

const QuestionList = ({ questionNumbers, selectedQuestion, handleClick }) => {
  const handleQuestionClick = (number) => {
    handleClick(number);
  };

  return (
    <div className="flex flex-col items-center p-4 overflow-y-auto scroll-container" style={{width:'100%', maxWidth: '300px', Height: '400px', background:'#F9F9F8', borderRadius:'8px', border:'1px solid #EC9521'}}>
      <p className="text-xl font-bold mb-8 text-gray-700" style={{color:'#9095A1', fontFamily:'McLaren'}}>All Questions</p>
      <div className="grid grid-cols-3 gap-3">
        {questionNumbers.map((number) => (
          <button
          style={{ border:'1px solid black'}}
            key={number}
            className={`w-10 h-10 rounded-md ${selectedQuestion === number ? 'bg-gray-300 text-black' : 'bg-white'} hover:bg-gray-300`}
            onClick={() => handleQuestionClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
