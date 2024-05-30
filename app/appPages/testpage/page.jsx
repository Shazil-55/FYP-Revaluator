'use client';
import React, { useState } from 'react';

import TestPageHeader from "@/app/components/TestPage/TestPageHeader"
import TestPageSideBar from "@/app/components/TestPage/TestPageSideBar"
import TestPageSection from "@/app/components/TestPage/TestPageSection"
import ThankYouScreen from '../thankYouScreen/page';

const TestPage1 = () => {
  const [showThankScreen, setShowThankScreen] = useState(false);

  const handleShowThankScreen = () => {
    setShowThankScreen(true);
  };
  const handleShowNext=()=>{
    handleNext
  }
  return (
     <div style={{ height: '100vh' }}>
      {showThankScreen ? (
        <ThankYouScreen />
      ) : (
        <>
          <TestPageHeader />
          <div style={{ width: '100%', height: `calc(100vh - 100px)`, display: 'flex' }}>
            <TestPageSideBar onShowThankScreen={handleShowThankScreen}  />
            {/* <TestPageSection showNextButton={handleShowNext} /> */}
          </div>
        </>
      )}
    </div>
  )
}

export default TestPage1