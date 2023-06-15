import React from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Resume from './components/Resume/Resume';
import Project from './components/projects/Project';
import Publications from './components/publications/Publications';
import Contacts from './components/contacts/Contacts';
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        
        <Banner />
        <Resume />
        <Project />
        <Publications />
        <Contacts />
        
      </div>
    </div>
  );
}

export default App;
