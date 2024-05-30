'use client';
import React, { useState } from 'react';
import QuestionList from '@/app/components/LandingPage/questions';
import ThankYouScreen from '@/app/appPages/thankYouScreen/page';
import styles from "@/app/styles/scrollbar.css"
import TestPageSection from './TestPageSection';
import { dummyQuestions } from '@/app/constants';

const TestPageSideBar = ({ onShowThankScreen}) => {
  const questionNumbers = Array.from({ length: 30 }, (_, index) => index + 1);
  const [selectedQuestion, setSelectedQuestion] = useState(1);
  const [showThankScreen, setShowThankScreen] = useState(false);

  const handleNext = () => {
    setSelectedQuestion((prevQuestion) => (prevQuestion < questionNumbers.length ? prevQuestion + 1 : prevQuestion));
  };

  const handlePrev = () => {
    setSelectedQuestion((prevQuestion) => (prevQuestion > 1 ? prevQuestion - 1 : prevQuestion));
  };

  const handleClick = (number) => {
    setSelectedQuestion(number);
  };

  const handleShowThankScreen = () => {
    onShowThankScreen();
  };

  return (<>
    <div className='mt-2 mx-4 lg:mt-0 lg:ml-4 lg:w-56 flex flex-col'>
      {/* Question List */}
      <div className='mb-1'>
        {/* Your QuestionList component */}
        <QuestionList questionNumbers={questionNumbers} selectedQuestion={selectedQuestion} handleClick={handleClick} />
      </div>
      {/* Conditional rendering of ThankYouScreen or Submit button */}
       
        <div style={{ display: 'flex', aligndummyQuestionss: 'center', justifydummyQuestionss: 'center' }}>
          <button
           onClick={handleShowThankScreen}
            style={{ width: '255px' }}
            className='w-full 3xl:w-auto px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600 hover:no-underline flex dummyQuestionss-center justify-center'>
            Submit
          </button>
          

        </div>
      
    </div>
    
    <div className='flex justify-center dummyQuestionss-start pt-2 mx-4 lg:mt-0 lg:ml-0 lg:w-3/4'>
      <div className='flex flex-col w-full lg:w-3/4' style={{border:'1px solid #EC9521', backgroundColor:'#F9F9F8', borderRadius:'13px', width: '95%', maxWidth: '1200px', height: '97%'}}>
          <div className='p-8'>
           <div className='mb-3 flex dummyQuestionss-center'>
             <p className='text-base font-medium mr-2'>Q. # {dummyQuestions[0].questionNo}</p>
             <p className='text-base font-medium'>{dummyQuestions.questionStatement}</p>
             <p className='text-base font-bold ml-auto'>1 Mark</p>
          </div>
         
            <div className="rounded-md p-2 mb-2" style={{border:'1px solid black', backgroundColor:'#FFFFFF', height:'160px',width:'100%'}}>
             {/* <ContentRenderer/> */}
           </div>
           <div className=" p-2 mb-1">
             {/*option A*/}
               <div className='mt-1 flex dummyQuestionss-center'>
                 <input type="radio" name="" id="" className='mr-2'/>
                 <div className='text-base'>{dummyQuestions.optionA}</div>
               </div>
               {/*option B*/}
               <div  className='mt-2 flex dummyQuestionss-center'>
                 <input type="radio" name="" id="" className='mr-2'/>
                 <div className='text-base'>{dummyQuestions.optionB}</div>
               </div>
             
                 {/*option C*/}
                 <div className='mt-2 flex dummyQuestionss-center'>
                   <input type="radio" name="" id="" className='mr-2'/>
                   <div className='text-base'>{dummyQuestions.optionC}</div>
                 </div>

                 {/*option D*/}
                 <div className='mt-2 flex dummyQuestionss-center'>
                   <input type="radio" name="" id="" className='mr-2'/>
                   <div className='text-base'>{dummyQuestions.optionD}</div>
                 </div>
                 <div className='flex dummyQuestionss-center justify-center mt-2'>
                   <button className='w-28 h-10 bg-white border border-yellow-500 text-yellow-500 font-semibold rounded-md mr-3 shadow-md hover:bg-yellow-600 focus:outline-none focus:bg-white-600' onClick={handlePrev} >Prev</button>                  
                   <button className='w-28 h-10 bg-yellow-500 text-white font-semibold rounded-md mr-3 shadow-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600'>Save</button>
                   <button className='w-28 h-10 bg-white border border-yellow-500 text-yellow-500 font-semibold rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600' onClick={handleNext}>Next</button>
                 </div>
               
             
           </div>
     </div>
        
      </div>
    </div>

    </>
  
  );
};

export default TestPageSideBar;
