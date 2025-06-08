import React from 'react'
import { Router,Route, Routes } from 'react-router-dom'

import './App.css'
import NavbarPage from './Components/Navbar'
import HomePage from './Pages/Home'
import AboutPage from './Pages/About'
import ProjectPage from './Pages/Projects'
import ContactPage from './Pages/Contact'
import ResumePage from './Pages/Resume'

function App() {
  

  return (
    <>
      <NavbarPage/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/resume' element={<ResumePage/>}/>
        <Route path='/projects' element={<ProjectPage/>}/>
        <Route path='/contact' element={<ContactPage/>} />
        <Route path="*" element={<h1 style={{ color: 'white' }}>404 Page Not Found</h1>} />

        
      </Routes>
    </>
  )
}

export default App
