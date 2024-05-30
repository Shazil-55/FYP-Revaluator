import Link from 'next/link';
import React from 'react';

const Nav = () => {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-between" style={{ height: '85px', backgroundColor: "#EC9521" }}>
        {/* Logo */}
        <div className="mb-4 lg:mb-0" style={{ backgroundColor: "white" }}>
          <img src="/logo.svg" alt="Logo" height="50px" width="200px" />
        </div>
  
        {/* Menu Items */}
        <div className="flex items-center">
          {/* Navigation Links */}
          <div className="lg:flex">
            <Link href="/appPages/uploadCandidateResume" className="nav-link">Dashboard</Link>
            <Link href="/appPages/candidate-list" className="nav-link">Candidate List</Link>
            {/* <Link href="/appPages/candidate-list" className="nav-link">Test Editor</Link> */}
            <Link href="/appPages/results" className="nav-link">Result</Link>
          </div>
  
          <div className="flex items-center lg:ml-8">
            <span className="icon mx-2"><i className="bi bi-search"></i></span>
            <span className="icon mx-2"><i className="bi bi-bell"></i></span>
            <span className="icon ms-2 me-5"><i className="bi bi-gear"></i></span>
  
            {/* Profile Dropdown */}
            <div className="dropdown">
              <div className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
      </div>
    );
};

export default Nav;
