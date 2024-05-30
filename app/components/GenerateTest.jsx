import React , {useState} from 'react'
import UpgradeCard from './UpgradeCard'
import ViewTest from './ViewTest'
import UploadCandidateResume from '../appPages/uploadCandidateResume/page'
import Dashboard from './Dashboard'

const GenerateTest = ({post , name , email , phoneNo}) => {

    const [testScreen , setTestScreen] = useState(false)
    const [thanksScreen , setThanksScreen] = useState (false)

    const showTest = () =>{
        setTestScreen(true)
    }

    const changeState = () =>{
        setThanksScreen(true)
    }

    
    
    
    return (
        <>
        
            {thanksScreen ?(
                <div className=' col-span-2 flex justify-content-center items-center'>
                    <Dashboard/>
                {/* <Link href = "/appPages/uploadCandidateResume"> Back To Home Screen</Link> */}
                </div>
        ):(
            <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-zinc-900 mt-6 mb-8">Generate Test on {post}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-6">
                        <h2 className="text-xl font-semibold text-zinc-900">Job Info</h2>
                        <span className="text-green-500">✔</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-semibold">Edit Test</button>
                   <div className='me-15 ' style ={{ display: 'flex', flexDirection: 'column', justifyContent:'center' , alignItems : 'center'}}> <UpgradeCard/>
                   </div>
                </div>
                {testScreen?(<>
            
            <ViewTest handleSubmit={changeState}/>
            
        </>):(
                <div className="col-span-2">
                    <div className="bg-white shadow rounded-lg p-6">
                        {post === "Job Post"?(
                            <div className="mb-6">
                            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Job Information</h2>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-zinc-700">Job title</label>
                                <input type="text" value="Graphic Designer" className="mt-1 bg-zinc-100 block w-full border border-zinc-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-zinc-700">Job Description</label>
                                <textarea rows="3" className="mt-1 bg-zinc-100 block w-full border border-zinc-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                            </div>
                        </div>
                        ):(
                            <div className="mb-6">
                            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Candidate Information</h2>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-zinc-700">Name</label>
                                <input type="text" value={name} className="mt-1 bg-zinc-100 block w-full border border-zinc-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-zinc-700">Email</label>
                                <input type="text" value={email} className="mt-1 bg-zinc-100 block w-full border border-zinc-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-zinc-700">Phone No</label>
                                <input type="text" value={phoneNo} className="mt-1 bg-zinc-100 block w-full border border-zinc-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            </div>
                        </div>
                        )}
                        
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-zinc-900 mb-4">Skills</h2>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-white  rounded-full px-4 py-1 text-sm  text-zinc-700" style ={{backgroundColor:'#EC9521'}}>Graphic <button className="ml-1 text-white hover:text-zinc-700">✖</button></span>
                                <span className="text-white  rounded-full px-4 py-1 text-sm  text-zinc-700"  style ={{backgroundColor:'#EC9521'}}>Social Media <button className="ml-1 text-white hover:text-zinc-700">✖</button></span>
                                <span className="text-white  rounded-full px-4 py-1 text-sm  text-zinc-700"  style ={{backgroundColor:'#EC9521'}}>Layout <button className="ml-1 text-white hover:text-zinc-700">✖</button></span>
                                <span className="text-white rounded-full px-4 py-1 text-sm  text-zinc-700"  style ={{backgroundColor:'#EC9521'}}>Color <button className="ml-1 text-white hover:text-zinc-700">✖</button></span>
                            </div>
                            <button className="text-blue-600 hover:text-blue-800 font-semibold">+ Add another skill</button>
                        </div>
                        <button onClick={showTest} className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600">Generate Test</button>
                    </div>
                </div>
        )}
            </div>
        </div>
            </>

    )}


        </>
    )
}


export default GenerateTest