import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-[70vh]'>
        <Routes>
           <Route path="/" element={<Home />} />
           {/* Add other routes as needed */}
           <Route path="/classes" element={<div>Classes Page</div>} />
           <Route path="/memberships" element={<div>Memberships Page</div>} />
           <Route path="/trainers" element={<div>Trainers Page</div>} />
           <Route path="/about" element={<div>About Page</div>} />
           <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
