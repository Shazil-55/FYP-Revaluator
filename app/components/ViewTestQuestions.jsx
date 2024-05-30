import React from 'react'

const ViewTestQuestions = ({questionNo , questionStatement , optionA , optionB , optionC , optionD , answer}) => {
 
    const obj ={
        "a" : optionA,
        "b" : optionB,
        "c" : optionC,
        "d" : optionD,
    } 
    const value = obj[answer]
 
    return (
    <div>
         <div className="bg-zinc-50 p-4 rounded-lg">
                        <p className="font-bold">Question : {questionNo}</p>
                        <p>{questionStatement}</p>
                        <ul className=" list-none pl-2">
                            <li>a {optionA}</li>
                            <li>b {optionB}</li>
                            <li>c {optionC}</li>
                            <li>d {optionD}</li>
                        </ul>
                        <p className="font-semibold">Answer: {answer} {value}</p>
                    </div>
    </div>
  )
}

export default ViewTestQuestions