import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from "./components/Home" 
import Peliculas from "./components/Peliculas"
import Series from "./components/Series"
import Buscar from "./components/Buscar"
import ErrorNoEncontrado from "./components/ErrorNoEncontrado"

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import PeliculaCategoria from './components/PeliculaCategoria';


const App = () => {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='*' element={<ErrorNoEncontrado/>}/>
        <Route path='/' element={<Home/>}/>

        <Route path='/peliculas' element={<Peliculas/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='/buscar' element={<Buscar/>}/>

        <Route path='/peliculacategoria/:idDetalle' element={<PeliculaCategoria/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
