'use client';
import LandingPage from "./appPages/landingPage/page"
import LandingPageTwo from "./appPages/landingPageTwo/page"
import ThankYouScreen from "./appPages/thankYouScreen/page"
import LoginPage from "./appPages/loginForm/page"
import SignUpPage  from "./appPages/signUpForm/page"
import TestPage1 from "./appPages/testpage/page"
import ExamInstracutions from './appPages/examInstracution/page'
import React, { useState } from 'react';


import CandidateList from './appPages/candidate-list/page'
import Dashboard from "./components/Dashboard"
import Results from "./appPages/candidate-list-score/page"
import Widget from "./appPages/profile/page"
import Result from "./appPages/results/page"
import TestEditor from "./appPages/test-editor/page"
// import Recruiter from "./appPages/recruiter/page"
import UploadCandidateResume from "./appPages/uploadCandidateResume/page"
export default function Home() {

  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showSignUpPage, setShowSignUpPage] = useState(false);
  const [showExamInstruction, setShowExamInstruction] = useState(false);
  const [showTestPage, setShowTestPage] = useState(false);



  const handleShowLoginPage = () => {
    setShowLoginPage(true);
    setShowSignUpPage(false); 
    setShowExamInstruction(false);
    setShowTestPage(false);

  };

  const handleShowSignUpPage = () => {
    setShowLoginPage(false);
    setShowSignUpPage(true);
    setShowExamInstruction(false);
    setShowTestPage(false);

  };

  const handleShowExamInstruction = () => {
    setShowLoginPage(false);
    setShowSignUpPage(false);
    setShowExamInstruction(true);
    setShowTestPage(false);

  };
  const handleTestPage=()=>{
    console.log('hello');
    setShowLoginPage(false);
    setShowSignUpPage(false);
    setShowExamInstruction(false);
    setShowTestPage(true);

  }

  return (
    <main>
      
      {/* {showLoginPage && <LoginPage onShowSignUpPage={handleShowSignUpPage} />}
      {showSignUpPage && <SignUpPage onShowExamInstruction={handleShowExamInstruction} />}
      {showExamInstruction && <ExamInstracutions onShowTestPage={handleTestPage} />}
      {showTestPage && <TestPage1 />}
      {!showLoginPage && !showSignUpPage && !showExamInstruction && !showTestPage && (
        <LandingPage onShowLoginPage={handleShowLoginPage} />
      )} */}
      <LandingPage/>
      

      {/**LoginPage  */}
      {/**SignUpPage  */}
      {/**LandingPage  */}
      {/**LandingPageTwo  */}
      {/**TestPage1  */}
      {/**Exam Instruction */}
      {/**Thank You screen  */}

      {/* <ExamInstracutions/> */}
     
    </main>
  )
}
