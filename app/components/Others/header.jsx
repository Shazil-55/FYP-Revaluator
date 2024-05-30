// Header Component
import React from 'react';

const Header = ({ student }) => {
  return (
    <div className="p-4 bg-green-600 flex justify-between items-center rounded-md">
    <div>
      <p className='text-3xl'>AssesIn</p>
    </div>
    <div className="flex justify-end">
      <div className="ml-auto">
        <p className="text-1xl"><strong>Candidate Name</strong> <span style={{margin: '0 3px'}}></span>: {student.name}</p>
        <p className="text-1xl"><strong>EMP ID</strong> <span style={{margin: '0 41px'}}></span>: {student.id}</p>
      </div>
      <span style={{margin: '0 20px'}}></span>
      <div className="ml-4">
        <p className="text-2xl font-sans"><strong>Time Remaining</strong></p>
        <p className="text-2xl text-center">100:00 min</p>
      </div>
    </div>
  </div>
  
  );
};

export default Header;
