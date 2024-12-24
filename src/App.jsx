import { useState } from 'react'



import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Resume from './components/Resume'
import Contact from './components/contact'

import Projects from './components/Projects'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar/>
    <Home/>
    <Resume/>
    <Footer/> */}

<Router>
      <Navbar /> {/* Navbar visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
