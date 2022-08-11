import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Nav from './components/Nav'
import Home from './pages/Home'
import Catalogue from './pages/Catalogue'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <Nav />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Catalogue' element={<Catalogue />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
