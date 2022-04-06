import Container from '@mui/material/Container';
import Secciones from "./Secciones"
import useFetchPeliculas from "../hook/useFetchPeliculas";
import CarruselPeliculas from './CarruselPeliculas';
import { cortarArrayPeliculas } from "../utils/variables";
import Box from '@mui/material/Box';

const Peliculas = ()=>{
    const { pelicula: peliculasPopulares } = useFetchPeliculas('popular', 'movie');
    const { pelicula: peliculasMejorCriticas } = useFetchPeliculas('top_rated', 'movie');
    const { pelicula: peliculasAEstrenarse } = useFetchPeliculas('upcoming', 'movie');

    return(
        <Container sx={{mt:20}}>
            <CarruselPeliculas/>
            <Box sx={{mt:7}}>
                <Secciones
                cardPrincipales= {cortarArrayPeliculas(peliculasPopulares)}
                titulo= "Peliculas Populares"
                categoria="popular"
                />
                <Secciones
                cardPrincipales= {cortarArrayPeliculas(peliculasMejorCriticas)}
                titulo= "Peliculas con mejores criticas"
                categoria="top_rated"
                />
                <Secciones
                cardPrincipales= {cortarArrayPeliculas(peliculasAEstrenarse)}
                titulo= "Peliculas a estrenarse"
                categoria="upcoming"
                />
            </Box>
        </Container>
    )
}


export default Peliculas;