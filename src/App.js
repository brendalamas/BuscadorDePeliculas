import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from "./components/Home" 
import UltimosLanzamientos from "./components/UltimosLanzamientos"
import Populares from "./components/Populares"
import Buscar from "./components/Buscar"
import NavBar from "./components/NavBar"
import ErrorNoEncontrado from "./components/ErrorNoEncontrado"
import Peliculas from "./components/Peliculas"
import PeliculasDetalle from "./components/PeliculasDetalle"



function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='*' element={<ErrorNoEncontrado/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/ultimoslanzamientos' element={<UltimosLanzamientos/>}/>
      <Route path='/populares' element={<Populares/>}/>
      <Route path='/buscar' element={<Buscar/>}/>
      <Route path='/peliculas' element={<Peliculas/>}/>
      <Route path='/peliculas/:idPelicula' element={<PeliculasDetalle/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
