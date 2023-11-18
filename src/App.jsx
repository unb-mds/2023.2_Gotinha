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
          <Route path="/pagina-mds" element={<Home />} />
          <Route path="/pagina-mds/Sobre" element={<Sobre />} />
          <Route path="/pagina-mds/Pesquisa" element={<Pesquisa />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;