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
          <Route path="/2023.2_Gotinha" element={<Home />} />
          <Route path="/2023.2_Gotinha/Sobre" element={<Sobre />} />
          <Route path="/2023.2_Gotinha/Pesquisa" element={<Pesquisa />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;