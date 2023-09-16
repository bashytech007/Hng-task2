import React , { useState } from 'react';
import './App.css'

import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search';
import MovieDetails from './pages/MovieDetails';
import SideBar from './components/Sidebar';


function App() {
 const apiKey = import.meta.env.VITE_APIKEY;
  // const [activeSection, setActiveSection] = useState("true");

  return (
    <Routes>
     <Route path ="/" element={<Home/>}/>
    <Route path ="/search" element={<Search/>}/>
    <Route path="/movie/:id" element={<MovieDetails/>}>
     {/* <Route path='sidebar' element={<SideBar/>}/> */}
    </Route>
    </Routes>
  );
}

export default App
