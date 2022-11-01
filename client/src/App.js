import './App.css'
import React from 'react'
import Nav from './components/Nav'
import AllCoasters from './components/AllCoasters'
import CoasterRegions from './components/CoasterRegions'
import Details from './components/Details'
import Home from './components/Home'
import NewCoasterForm from './components/NewCoasterForm'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header>{/* <Nav /> */} </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allcoasters" element={<AllCoasters />} />
          <Route path="/:id" element={<CoasterRegions />} />
          <Route path="/coaster/:id" element={<Details />} />
          <Route path="/newcoasterform" element={<NewCoasterForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
