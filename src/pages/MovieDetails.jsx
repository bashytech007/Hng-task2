import React,{useState} from 'react'
import SideBar from '../components/Sidebar'
// import { Link, Outlet } from 'react-router-dom'
import MovieContent from '../components/MovieContent'

export default function MovieDetails() {
      const [activeSection, setActiveSection] = useState("true");

  return (
    <div className='flex gap-4'>
    
        <SideBar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <MovieContent
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
    
    </div>
  );
}

