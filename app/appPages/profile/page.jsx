import Nav from '@/app/components/Nav';
import React from 'react';
import Navbar from "@/app/components/Dashboard/navbar"


export default function Widget() {
    return (
        <div>
            <Navbar/>
            <div className="bg-zinc-100 p-8">
              <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg ">
                <h1 className="text-2xl font-semibold mb-6">Edit profile</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-zinc-700 text-sm font-bold mb-2">Profile photo</label>
                    <div className="flex items-center space-x-4">
                      <img src="https://placehold.co/100x100" alt="Profile Photo" className="rounded-full"/>
                      <div>
                        <button className="bg-zinc-300 hover:bg-zinc-400 text-zinc-800 font-bold py-2 px-4 rounded inline-flex items-center">
                          <span>Choose image</span>
                        </button>
                        <button className="text-red-500 hover:text-red-700 text-sm pl-2">Remove</button>
                        <p className="text-xs text-zinc-500 mt-1">Your photo should be in JPG or PNG format</p>
                      </div>
                    </div>
                  </div>
                  <div></div>
                  <div>
                    <label className="block text-zinc-700 text-sm font-bold mb-2">First Name</label>
                    <input type="text" placeholder="Your first name" className=" appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:-outline" style={{ backgroundColor:"white" }}/>
                  </div>
                  <div>
                    <label className="block text-zinc-700 text-sm font-bold mb-2">Last name</label>
                    <input type="text" placeholder="Your last name" className=" appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:-outline" style={{ backgroundColor:"white" }}/>
                  </div>
                  <div>
                    <label className="block text-zinc-700 text-sm font-bold mb-2">Phone number</label>
                    <input type="text" placeholder="Your phone number" className=" appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:-outline" style={{ backgroundColor:"white" }}/>
                  </div>
                  <div>
                    <label className="block text-zinc-700 text-sm font-bold mb-2">Email</label>
                    <input type="email" placeholder="Your email" className=" appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:-outline" style={{ backgroundColor:"white" }}/>
                  </div>
                  <div>
                    <label className="block text-zinc-700 text-sm font-bold mb-2">Company Name</label>
                    <input type="text" placeholder="Your company" className=" appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:-outline" style={{ backgroundColor:"white" }}/>
                  </div>
                  <div>
                    <label className="block text-zinc-700 text-sm font-bold mb-2">Location</label>
                    <select className="block appearance-none w-full bg-white border border-zinc-400 hover:border-zinc-500 px-4 py-2 pr-8 rounded  leading-tight focus:outline-none focus:-outline" style={{ backgroundColor:"white" }}>
                      <option>-Select your country-</option>
                      <option key="1">Country 1</option>
                      <option key="2">Country 2</option>
                      <option key="3">Country 3</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-zinc-700 text-sm font-bold mb-2">About me</label>
                    <textarea placeholder="Tell something about yourself" className=" appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:-outline" style={{ backgroundColor:"white" }} rows={6}></textarea>
                  </div>
                </div>
                <div className="flex justify-end space-x-4 mt-6">
                  <button className="bg-zinc-300 hover:bg-zinc-400 text-zinc-800 font-bold py-2 px-4 rounded">Cancel</button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" style={{backgroundColor: "#EC9521"}} >Save profile</button>
                </div>
              </div>
            </div>
        </div>
      
    )
}
