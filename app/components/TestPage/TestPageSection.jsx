import React , {useState}from 'react';

const TestPageSection = ({showNextButton}) => {
 
  const handleNext=()=>{
    showNextButton()
  }

  

  return (
    <div className='flex justify-center items-start pt-2 mx-4 lg:mt-0 lg:ml-0 lg:w-3/4'>
      <div className='flex flex-col w-full lg:w-3/4' style={{border:'1px solid #EC9521', backgroundColor:'#F9F9F8', borderRadius:'13px', width: '95%', maxWidth: '1200px', height: '97%'}}>
         <div className='p-8'>
              <div className='mb-3 flex items-center'>
                <p className='text-base font-medium mr-2'>Q. #</p>
                <p className='text-base font-medium'>What is your age</p>
                <p className='text-base font-bold ml-auto'>1 Mark</p>
             </div>
            
               <div className="rounded-md p-2 mb-2" style={{border:'1px solid black', backgroundColor:'#FFFFFF', height:'160px',width:'100%'}}>
                {/* <ContentRenderer/> */}
              </div>
              <div className=" p-2 mb-1">
                {/*option A*/}
                  <div className='mt-1 flex items-center'>
                    <input type="radio" name="" id="" className='mr-2'/>
                    <div className='text-base'>Option A</div>
                  </div>
                  {/*option B*/}
                  <div  className='mt-2 flex items-center'>
                    <input type="radio" name="" id="" className='mr-2'/>
                    <div className='text-base'>Option B</div>
                  </div>
                
                    {/*option C*/}
                    <div className='mt-2 flex items-center'>
                      <input type="radio" name="" id="" className='mr-2'/>
                      <div className='text-base'>Option C</div>
                    </div>

                    {/*option D*/}
                    <div className='mt-2 flex items-center'>
                      <input type="radio" name="" id="" className='mr-2'/>
                      <div className='text-base'>Option D</div>
                    </div>
                    <div className='flex items-center justify-center mt-2'>
                      <button className='w-28 h-10 bg-white border border-yellow-500 text-yellow-500 font-semibold rounded-md mr-3 shadow-md hover:bg-yellow-600 focus:outline-none focus:bg-white-600' onClick={handleNext} >Prev</button>                  
                      <button className='w-28 h-10 bg-yellow-500 text-white font-semibold rounded-md mr-3 shadow-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600'>Save</button>
                      <button className='w-28 h-10 bg-white border border-yellow-500 text-yellow-500 font-semibold rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600' onClick={handlePrev}>Next</button>
                    </div>
                  
                
              </div>
        </div>
      </div>
    </div>
  )
}

export default TestPageSection;
