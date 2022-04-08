import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import "./styles/style.scss"

import {useState} from "react"
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
import Context from "./context/Context"


const App = () => {
  const [language, setLanguage] = useState("es")
  const context = {
    language: language,
    setLanguage: setLanguage
  }

  return (
    <Context.Provider value={context}>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/peliculas' element={<Peliculas/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='/busqueda' element={<Busqueda/>}/>
        <Route path='/peliculacategoria/:idDetalle' element={<PeliculaCategoria/>}/>
        <Route path='/seriecategoria/:idSerie' element={<SerieCategoria/>}/>
        <Route path='/detalle-peliculas/:idPersonajesPeliculas' element={<CardDetallePeliculas/>}/>
        <Route path='/detalle-series/:idPersonajesSeries' element={<CardDetalleSeries/>}/>
        <Route path='*' element={<ErrorNoEncontrado/>}/>
      </Routes>
    </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
