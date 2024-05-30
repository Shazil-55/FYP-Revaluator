'use client';
import Link from 'next/link';
import React, { useState } from 'react'
import styles from "@/app/styles/scrollbar.css"
import { usePathname } from 'next/navigation';

const Navbar = () => {

const pathname=usePathname()

console.log("pathname",pathname)

    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-dark p-3" style={{ backgroundColor: '#EC9521', height: '90px' }}>
                <div className="container-fluid">
                    <div style={{ backgroundColor: 'white', width: '359px', height: '98px', marginLeft: '-32px' }}>
                        <img src="/Dashboard/navbar/logo.svg" alt="" style={{ height: '100%', width: '100%' }} />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link href="/appPages/uploadCandidateResume" className={`${pathname === '/appPages/uploadCandidateResume' ? "activeNavItemStyle" : "navItemStyle"}`} >Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/appPages/candidate-list"  className={`${pathname === '/appPages/candidate-list' ? "activeNavItemStyle" : "navItemStyle"}`} >Candidate List</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/appPages/results"  className={`${pathname === '/appPages/results' ? "activeNavItemStyle" : "navItemStyle"}`}>Result</Link>
                            </li>
                        </ul>

                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='flex' style={{ marginLeft: '4rem', marginRight: '4rem' }}>
                            <a href="#">
                                <div style={{ width: '32px', height: '32px' }}>
                                    <img src="/Dashboard/navbar/searchIcon.svg" alt="" />
                                </div>
                            </a>
                            <a href="#">
                                <div className='ml-2 mr-2' style={{ width: '32px', height: '32px' }}>
                                    <img src="/Dashboard/navbar/bellIcon.svg" alt="" />
                                </div>
                            </a>
                            <a href="#">
                                <div style={{ width: '32px', height: '32px' }}>
                                    <img src="/Dashboard/navbar/settingIcon.svg" alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="dropdown ">
                            <div className="dropdown-toggle flex items-center mr-20" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="icon mx-2">
                                    <i className="bi bi-person rounded-circle bg-dark p-2"></i>
                                </span>
                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link href="/appPages/profile" className="dropdown-item">Profile</Link>
                                <Link href="/settings" className="dropdown-item">Settings</Link>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}




export default Navbar