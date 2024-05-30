'use client';
import React from 'react';
import Link from 'next/link';



const ExamInstructions = () => {
  
  return (
    <div style={{ height: '100vh', padding: '1rem' }}>

        {/* Logo */}
        <div style={{ height: '4rem' }}>
          <img src="/output.png" alt="" style={{ height: '160%' }} />
        </div>
        <div className='flex items-end justify-end'>
          <div className='mb-3' style={{height:'100%',width:'80%',border:'1px solid #0A273E'}}>
          
          </div>
        </div>
      {/* Exam instruction */}
      <div className='flex flex-col md:flex-row' style={{ height:'86%',margin: '0 auto', maxWidth: '80rem', border: '1px solid #A8680F', borderRadius: '1rem',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
        {/* Left side bar */}
        <div className="hidden md:block" style={{ width: '10%', height: '100%', backgroundColor: '#EC9521', borderRadius: '1rem' }}></div>
        {/* Right section */}
        <div className='flex flex-col' style={{ flex: '1', marginLeft: '1rem'}}>
          {/* Top exam bar */}
          <div className='h-20 md:h-32 flex items-center justify-between pl-4 pr-4' style={{ backgroundColor: '#EC9521', borderRadius: '1rem' , height:'17%'}}>
            <div  className='text-lg md:text-xl lg:text-3xl' style={{ fontWeight: 'bold',color: '#FFFFFF', fontFamily: 'Inter' }}>Exam Instructions</div>
            <div className='flex gap-2 flex-col items-end'>
              <div style={{ fontWeight: 'bold', fontSize: '1rem', color: '#FFFFFF', fontFamily: 'Inter' }}>Emp Name</div>
              <div style={{ fontWeight: 'bold', fontSize: '1rem', color: '#FFFFFF', fontFamily: 'Inter' }}>Emp No. 0001</div>
            </div>
          </div>
          {/*remaining time and instruction*/}
          <div className='flex '>
            {/**instructions */}
            <div>
                <p className='mt-1 md:pt-5 pl-3' style={{ fontSize: '1rem', color: '#000000', fontFamily: 'Istok Web' }}>
                Exam name: JAVA Time: 1:00 hr <br /><br />
                This is MCQ Exam, the duration of the exam is [60] minutes. <br />
                For passing 40 marks are required. <br />
                Allow adequate time to complete this exam in one sitting and before the due <br />
                date and time. <br />
                Late submission will not/ may not be accepted. <br />
                This is a closed book exam. <br />
                The following materials and provisions are permitted: <br />
                Insert as necessary “be specific and clear+</p>
            </div>
          </div>
          <div className='flex items-start justify-between mt-2 md:mt-5 ml-4 md:ml-14'>
            <div className='flex gap-2 items-center'>
                <input type="checkbox" name="" id="" style={{ transform: 'scale(1.5)' }} />
                <div className="text-2xl md:text-base" style={{ color: '#000000', fontFamily: 'Manrope', fontWeight: 'bolder' }}>I have read all the instructions carefully</div>
            </div>
            <div className='mr-4 flex items-center justify-center hidden xl:flex' style={{ marginTop: '-12rem', width: '220px', height: '220px', borderRadius: '100%', border: '3px solid #0A273E' }}>
                <div className='flex flex-col items-center justify-center ' style={{ width: '90%', height: '90%', borderRadius: '100%', border: '6px solid #EC9521', }}>
                    <div style={{ color: '#0A273E', fontFamily: 'Inter', fontWeight: 'bold', fontSize: '18px' }}>Time remaining </div>
                    <div style={{ color: '#0A273E', fontFamily: 'Inter', fontWeight: 'bold', fontSize: '24px' }}>10:05 min</div>
                </div>
            </div>
          </div>
          <div className='flex items-center justify-center mt-3 md:mt-10'>
              <Link 
                href="/appPages/testpage" 
                className=' bg-yellow-500 text-white font-semibold rounded-sm mr-3 shadow-md hover:bg-yellow-600  focus:bg-yellow-600 hover:no-underline' 
                style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', width: '8rem', height: '3rem', backgroundColor: '#EC9521', borderRadius: '1rem', fontFamily: 'Inter', fontWeight: 'bold', fontSize: '1.5rem', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Start
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamInstructions;
