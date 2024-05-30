// HomePage.js
'use client';
import React, { useState } from 'react';
import NavbarLink from '@/app/components/NavbarLink';
import Card from '@/app/components/Cardbg';

const HomePage = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('Dashboard');

  const handleNavItemClick = (labelText) => {
    setSelectedNavItem(labelText);
  };

  return (
    <div className="flex h-screen">
      <nav className="bg-yellow-600 w-1/10 flex flex-col items-center justify-start p-4 rounded-lg">
        <NavbarLink iconText="C" labelText="Dashboard" onClick={() => handleNavItemClick("Dashboard")} />
        <NavbarLink iconText="C" labelText="Masters" onClick={() => handleNavItemClick("Masters")} />
        <NavbarLink iconText="C" labelText="Exam Schedule" onClick={() => handleNavItemClick("Exam Schedule")} />
        <NavbarLink iconText="C" labelText="Question paper setting" onClick={() => handleNavItemClick("Question paper setting")} />
        <NavbarLink iconText="C" labelText="Results" onClick={() => handleNavItemClick("Results")} />
        <NavbarLink iconText="C" labelText="Report" onClick={() => handleNavItemClick("Report")} />
      </nav>

      <div className="flex flex-grow">  
        <div className="flex-grow p-8" style={{ minWidth: 0 , width: '100%', height:'100%'}}>
          <Card heading = {selectedNavItem} title="Welcome!" content={`This is a sample card component rendered`} />
        </div>

        <main className="flex-grow p-8">
          {/* Your main content */}
        </main>
      </div>
    </div>
  );
};

export default HomePage;
