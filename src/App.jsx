import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Catalogue from './pages/Catalogue'

function App() {
  return (
    <div className="App">
      <Nav />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Catalogue' element={<Catalogue />} />
      </Routes>
    </div>
  );
}

export default App;
