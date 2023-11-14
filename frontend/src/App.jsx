import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './Home'
import Sobre from './Sobre'
import Pesquisa from './Pesquisa'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Pesquisa" element={<Pesquisa />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;