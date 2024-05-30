// ContentRenderer Component
import React from 'react';

const TestEditor = () => {
  return (
    <div className="flex-grow p-4 overflow-y-auto">
      {/* Content will be rendered here */}
      <div className="mb-6">
        <ul>
          <li className="flex items-center mb-2">
            <input type="radio" id="option-A" name="mcq-1" value="laptop" className="mr-2" />
            <label htmlFor="option-A">A <span style={{margin:'0 10px'}}></span> laptop</label>
          </li>
          <li className="flex items-center mb-2">
            <input type="radio" id="option-B" name="mcq-1" value="mobile" className="mr-2" />
            <label htmlFor="option-B">B <span style={{margin:'0 10px'}}></span> mobile</label>
          </li>
          <li className="flex items-center mb-2">
            <input type="radio" id="option-C" name="mcq-1" value="camera" className="mr-2" />
            <label htmlFor="option-C">C <span style={{margin:'0 10px'}}></span> CAMERA</label>
          </li>
          <li className="flex items-center mb-2">
            <input type="radio" id="option-D" name="mcq-1" value="hotspot" className="mr-2" />
            <label htmlFor="option-D">D <span style={{margin:'0 10px'}}></span> hotspot</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TestEditor;
