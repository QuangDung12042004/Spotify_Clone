import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import Home_spotify from './pages/home_spotify.jsx'
import Login from './pages/login.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home_spotify />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
