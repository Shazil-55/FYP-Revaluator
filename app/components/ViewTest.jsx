import React , {useState} from 'react'
import ViewTestQuestions from './ViewTestQuestions'
import { dummyQuestions } from '../constants'
import Link from 'next/link'
import UploadCandidateResume from '../appPages/uploadCandidateResume/page'
// import {  } from 'next/router'
// import { Navigate } from 'react-router-dom'

const ViewTest = ({handleSubmit}) => {
    // const router = Navigate()

    const navigateToHome =()=>{
        // console.log("Navigation to home")
        // setThanksScreen(true)
        
        alert("You have submmitted your test successfully")
        // router.Navigate('/appPages/candidate-list')
        handleSubmit()
    }
  return (
    <>
   
            <div className="col-span-2">
        <h4>Test Editor</h4>
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex ">
                        <label htmlFor="testTime" className="block mt-3 me-2 text-sm font-medium text-zinc-700">Test Time (mints):</label>
                        <input type="number" defaultValue={30} id="testTime" name="testTime" className="mt-1 block bg-white w-full pl-3 pr-2 py-2 text-dark border focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" style ={{width : '100px'}}/>
                            
                    </div>
                    <div className="flex ">
                        <label className="block text-sm font-medium text-zinc-700 mt-3 me-3">Targeted Skills:</label>
                        <div className="flex gap-2 mt-1">
                            <span className="px-3 py-2 rounded-full text-sm font-medium bg-blue-100 text-white" style ={{backgroundColor:"#EC9521"}}>Graphic</span>
                            <span className="px-3 py-2 rounded-full text-sm font-medium bg-green-100 text-white"  style ={{backgroundColor:"#EC9521"}}>Social Media</span>
                            <span className="px-3 py-2 rounded-full text-sm font-medium bg-yellow-100 text-white"  style ={{backgroundColor:"#EC9521"}}>Layout</span>
                            <span className="px-3 py-2 rounded-full text-sm font-medium bg-red-100 text-white"  style ={{backgroundColor:"#EC9521"}}>Color</span>
                        </div>
                    </div>
                </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3"  style ={{backgroundColor:"#EC9521" , borderRadius:"20px"}}>
                        Re-Generate Test
                    </button>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mt-5" style ={{maxHeight : "400px" , overflow:"auto"}}>

                <div className="space-y-6">
                    {dummyQuestions.map((question, index) => (
                        <ViewTestQuestions
                            key={index} // Use a unique key for each component in the list
                            questionNo={question.questionNo}
                            questionStatement={question.questionStatement}
                            optionA={question.optionA}
                            optionB={question.optionB}
                            optionC={question.optionC}
                            optionD={question.optionD}
                            answer={question.answer}
                        />
                    ))}
                </div>
        </div>
                <div className="mt-8 flex justify-center items-center">
                    <button onClick={navigateToHome} className="text-white font-bold py-2 px-4  mb-5"  style ={{backgroundColor:"#EC9521" , borderRadius:"20px" }}>
                        Save Test 
                    </button>
                </div>
            </div>


            </>
        
  )
}

export default ViewTest



        