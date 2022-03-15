import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from "./components/Home" 
import UltimosLanzamientos from "./components/UltimosLanzamientos"
import Populares from "./components/Populares"
import Buscar from "./components/Buscar"
import ErrorNoEncontrado from "./components/ErrorNoEncontrado"

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import CardDetallePelicula from './components/CardDetallePelicula';


const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='*' element={<ErrorNoEncontrado/>}/>
        <Route path='/' element={<Home/>}/>

        <Route path='/ultimoslanzamientos' element={<UltimosLanzamientos/>}/>
        <Route path='/populares' element={<Populares/>}/>
        <Route path='/buscar' element={<Buscar/>}/>

        <Route path='/carddetallepelicula/:idPelicula' element={<CardDetallePelicula/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
