import React from 'react';

const TestPageHeader = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between pr-3 pt-4' style={{height:'100px', width:'100%'}}>
      {/* top-right image */}
      <div className="mb-4 lg:mb-0 lg:mr-4" style={{ maxWidth: '400px' }}>
        <img src="/output.png" alt="" className="h-auto lg:h-full w-full" />
      </div>
      {/* name and id text */}
      <div className="mb-4 lg:mb-0 lg:ml-4 lg:text-left">
        <div className="text-base font-medium mb-1" style={{color:'#171A1F'}}>Candidate Name: Veer</div>
        <div className="text-base font-medium" style={{color:'#171A1F'}}>EMPID: 0001</div>
      </div>
      {/* time remaining */}
      <div className="text-right">
        <div className="text-2xl font-bold mb-1" style={{color:'#EC9521'}}>Time Remaining</div>
        <div className="text-3xl font-bold" style={{color:'#565D6D'}}>00:50 min</div>
      </div>
    </div>
  );
}

export default TestPageHeader;
