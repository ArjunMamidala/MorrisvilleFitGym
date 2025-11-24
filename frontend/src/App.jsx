import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Classes from "./pages/Classes"
import Contact from './pages/Contact'
import Memberships from './pages/Memberships'
import Trainers from './pages/Trainers'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-[70vh]'>
        <Routes>
           <Route path="/" element={<Home />} />
           {/* Add other routes as needed */}
           <Route path="/classes" element={<Classes/>} />
           <Route path="/Dashboard" element={<Dashboard/>} />
           <Route path="/memberships" element={<Memberships/>} />
           <Route path="/trainers" element={<Trainers/>} />
           <Route path="/about" element={<div>About Page</div>} />
           <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
