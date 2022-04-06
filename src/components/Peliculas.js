import Container from '@mui/material/Container';
import Secciones from "./Secciones"
import useFetchPeliculas from "../hook/useFetchPeliculas";
import CarruselPeliculas from './CarruselPeliculas';
import { cortarArrayPeliculas } from "../utils/variables";
import Box from '@mui/material/Box';
import Context from "../context/Context";
import { useContext } from 'react';


const Peliculas = ()=>{
    const context = useContext(Context);
  
    const { pelicula: peliculasPopulares} = useFetchPeliculas('popular', 'movie', `${context.language}`);
    const { pelicula: peliculasMejorCriticas} = useFetchPeliculas('top_rated', 'movie', `${context.language}`);
    const { pelicula: peliculasAEstrenarse} = useFetchPeliculas('upcoming', 'movie', `${context.language}`);

    return(
        <Container sx={{mt:20}}>
            <CarruselPeliculas/>
            <Box sx={{mt:7}}>
                <Secciones
                cardPrincipales= {cortarArrayPeliculas(peliculasPopulares)}
                titulo= "Peliculas Populares"
                categoria="popular"
                isTV={false}
                />
                <Secciones
                cardPrincipales= {cortarArrayPeliculas(peliculasMejorCriticas)}
                titulo= "Peliculas con mejores criticas"
                categoria="top_rated"
                isTV={false}
                />
                <Secciones
                cardPrincipales= {cortarArrayPeliculas(peliculasAEstrenarse)}
                titulo= "Peliculas a estrenarse"
                categoria="upcoming"
                isTV={false}
                />
            </Box>
        </Container>
    )
}


export default Peliculas;