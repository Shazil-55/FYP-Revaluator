"use client"
import {useState} from 'react';
import { FaTrash } from 'react-icons/fa';
import Nav from './Nav';
import UpgradeCard from './UpgradeCard';
import Navbar from "@/app/components/Dashboard/navbar"


export default function Dashboard() {

    const data = [
        { id: 1, name: 'Elizabeth Lopez' },
        { id: 2, name: 'Matthew Martinez' },
        { id: 3, name: 'Elizabeth Hall' },
        { id: 4, name: 'Mundefined White' },
        { id: 5, name: 'Elizabeth Watson' },
        { id: 6, name: 'Caleb Jones' }
      ];

      const [selectedRows, setSelectedRows] = useState([]);

    const handleCheckboxChange = (id) => {
        setSelectedRows((prevSelectedRows) => {
        if (prevSelectedRows.includes(id)) {
            return prevSelectedRows.filter((rowId) => rowId !== id);
        } else {
            return [...prevSelectedRows, id];
        }
        });
    };

    return (
        <>
        {/* <Navbar /> */}
        <div className="bg-zinc-100 font-sans leading-normal tracking-normal">
            <div className="container-fluid mx-auto my-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">Upload Candidate Resume's</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                        
                        
                        <UpgradeCard/>
                        
                        <div className="col-span-2">
                            <div className='px2 mx-2 my-2' style ={{border : '1px solid #EC9521'}}>
                            <div className="mb-4 mt-4 mx-4 flex items-center">
                                <label className="block text-zinc-700 text-sm font-bold mb-2 mr-2" htmlFor="google-drive-link">
                                    Paste the URL of the Google Drive Link:
                                </label>
                                <input className="flex-grow  appearance-none border rounded py-2 px-3 text-zinc-700 leading-tight focus:outline-none  bg-gray-200" id="google-drive-link" type="text" placeholder="google drive link" style={{color: 'black' }} />
                            </div>




                            <div className="flex items-center justify-center my-6">
                                <span className="text-zinc-500 mx-4">OR</span>
                            </div>
                            <div className="flex justify-center mb-4">
                                <button className=" text-dark font-bold py-2 px-4 rounded inline-flex items-center" style={{ fontSize: '0.8rem', minWidth: '150px' }}>
                                    <img src="/Vector.png" className='px-2'/>
                                    Upload Resume from Local
                                </button>
                            </div>
                            </div>
                            <div className="mt-8">
                                <div className="overflow-auto">
                                    <table className="min-w-full bg-white">
                                    <thead className="bg-zinc-800 text-white">
                                        <tr>
                                        <th className="w-1/12 text-left bg-orange-400 hover:bg-orange-600 py-3 px-4 uppercase font-semibold text-sm">Select</th>
                                        <th className="w-1/3 text-left bg-orange-400 hover:bg-orange-600 py-3 px-4 uppercase font-semibold text-sm">Resume File Name</th>
                                        <th className="w-1/12 text-left bg-orange-400 hover:bg-orange-600 py-3 px-4 uppercase font-semibold text-sm">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-zinc-700">
                                        {data.map((item) => (
                                        <tr key={item.id}>
                                            <td className="w-1/12 py-3 px-4">
                                            <input
                                                type="checkbox"
                                                checked={selectedRows.includes(item.id)}
                                                onChange={() => handleCheckboxChange(item.id)}
                                            />
                                            </td>
                                            <td className="w-1/3 text-left py-3 px-4">{item.name}</td>
                                            <td className="w-1/12 text-left py-3 px-4">
                                            <FaTrash />
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                    </table>
                                </div>
                                <button className="mt-4  bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                                    Extract Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
