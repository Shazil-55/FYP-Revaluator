import React from 'react'
import {dummyData} from "../constants"


 const ShowCandidateList = ({showSkills ,showJobPost }) => {

    const generateTestOnSkillSet = () => {
        showSkills(); // Call the function passed as prop from parent component
    };

    const generateTestOnJobPost = () => {
        showJobPost(); // Call the function passed as prop from parent component
    };


  return (
    <div>
            <div className="flex justify-end mx-4 mt-3">
                <button onClick={generateTestOnJobPost} className=" text-white mr-2 p-2" style = {{background : '#EC9521' , borderRadius:'20px'}}>Generate test against Job Post</button>
                <button onClick={generateTestOnSkillSet} className=" text-white p-2 " style = {{background : '#EC9521' , borderRadius:'20px'}}>Generate test on Skill Set</button>
            </div>
            <div className="min-h-screen bg-zinc-100 p-8">
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex space-x-4">
                            <div className="flex items-center space-x-2">
                                <input type="text" placeholder="Candidate Name" className="border-2 border-zinc-300 rounded-lg p-2" style={{ backgroundColor:"white" }} />
                               
                            </div>
                            <div className="flex items-center space-x-2">
                            <input type="text" placeholder="Email" className="border-2 border-zinc-300 rounded-lg p-2" style={{ backgroundColor:"white" }} />

                            </div>
                        </div>
                        <button className="text-zinc-500 hover:text-zinc-700">Clear filters</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-zinc-500">
                            <thead className="text-xs text-zinc-700 uppercase bg-zinc-50">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <input type="checkbox"  style={{ backgroundColor:"white" }}/>
                                        </div>
                                    </th>
                                    <th scope="col" className="py-3 px-6">AVATAR</th>
                                    <th scope="col" className="py-3 px-6">NAME</th>
                                    <th scope="col" className="py-3 px-6">FILE NAME</th>
                                    <th scope="col" className="py-3 px-6">EMAIL</th>
                                    <th scope="col" className="py-3 px-6">PHONE NO</th>
                                    <th scope="col" className="py-3 px-6">DATE</th>
                                    <th scope="col" className="py-3 px-6">Skill set</th>
                                    <th scope="col" className="py-3 px-6">CV SCORE</th>
                                </tr>
                            </thead>
                            <tbody>
            {dummyData.map(data => (
                <tr key={data.id} className="bg-white border-b">
                    <td className="p-4">
                        <div className="flex items-center">
                            <input type="checkbox" className="text-blue-600 rounded border-zinc-300" style={{ backgroundColor:"white" }} />
                        </div>
                    </td>
                    <td className="py-4 px-6">
                        <img src="https://placehold.co/40" alt="avatar" className="rounded-full" />
                    </td>
                    <td className="py-4 px-6">{data.name}</td>
                    <td className="py-4 px-6">{data.fileName}</td>
                    <td className="py-4 px-6">{data.email}</td>
                    <td className="py-4 px-6">{data.phone}</td>
                    <td className="py-4 px-6">{data.date}</td>
                    <td className="py-4 px-6">{data.skillSet}</td>
                    <td className="py-4 px-6">{data.cvScore}</td>
                </tr>
            ))}
        </tbody>
                        </table>
                    </div>
                    <div className="flex justify-between items-center pt-4">
                        <div>Show 1 to 10 of 20 results</div>
                        <div className="flex space-x-1">
                            <button className="p-2 border-2 rounded">1</button>
                            <button className="p-2 border-2 rounded">2</button>
                            <button className="p-2 border-2 rounded">3</button>
                            <span>...</span>
                            <button className="p-2 border-2 rounded">10</button>
                            <button className="p-2 border-2 rounded">11</button>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}


export default ShowCandidateList