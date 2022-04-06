import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from "./components/Home" 
import Peliculas from "./components/Peliculas"
import Series from "./components/Series"
import Busqueda from "./components/Busqueda"
import ErrorNoEncontrado from "./components/ErrorNoEncontrado"

import NavBar from "./components/NavBar"
import PeliculaCategoria from './components/PeliculaCategoria';
import SerieCategoria from './components/SerieCategoria';
import CardDetallePeliculas from './components/CardDetallePeliculas';
import CardDetalleSeries from './components/CardDetalleSeries';


const App = () => {
  
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='*' element={<ErrorNoEncontrado/>}/>
        <Route path='/' element={<Home/>}/>

        <Route path='/peliculas' element={<Peliculas/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='/busqueda' element={<Busqueda/>}/>

        <Route path='/peliculacategoria/:idDetalle' element={<PeliculaCategoria/>}/>
        <Route path='/seriecategoria/:idSerie' element={<SerieCategoria/>}/>
        <Route path='/detalle-peliculas/:idPersonajesPeliculas' element={<CardDetallePeliculas/>}/>
        <Route path='/detalle-series/:idPersonajesSeries' element={<CardDetalleSeries/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
