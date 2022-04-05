import Container from '@mui/material/Container';
import PeliculasSecciones from "./PeliculasSecciones"
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
                <PeliculasSecciones
                peliculasSlice= {cortarArrayPeliculas(peliculasPopulares)}
                titulo= "Peliculas Populares"
                categoria="popular"
                />
                <PeliculasSecciones
                peliculasSlice= {cortarArrayPeliculas(peliculasMejorCriticas)}
                titulo= "Peliculas con mejores criticas"
                categoria="top_rated"
                />
                <PeliculasSecciones
                peliculasSlice= {cortarArrayPeliculas(peliculasAEstrenarse)}
                titulo= "Peliculas a estrenarse"
                categoria="upcoming"
                />
            </Box>
        </Container>
    )
}


export default Peliculas;