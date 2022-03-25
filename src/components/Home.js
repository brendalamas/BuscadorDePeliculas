import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Listas from "./Listas";
import Carrusel from './Carrusel';
import useFetchPeliculas from "../hook/useFetchPeliculas";
import { cortarArrayPeliculas } from "../utils/variables";

const Home = ()=>{
    const { pelicula } = useFetchPeliculas('popular', 'movie');
    const { pelicula: peliculasMejorPunteadas } = useFetchPeliculas('top_rated', 'movie');

  const { pelicula: series } = useFetchPeliculas(
    'popular',
    'tv',
  );

    return(
        <Container sx={{mt:15, display:"flex", flexDirection:"column"}}>
            <Carrusel/>
            <Box sx={{display:"flex", flexDirection:"column", mt:8}}>
                <Box sx={{display:"flex"}}>
                    <Listas 
                    titulo="Peliculas Populares" 
                    pelicula={cortarArrayPeliculas(pelicula)}
                    isTv={false}
                    />
                    <Listas 
                    titulo="Peliculas Mejor Puntuadas" 
                    pelicula={cortarArrayPeliculas(peliculasMejorPunteadas)}
                    isTv={false}
                    />
                </Box>
                <Box sx={{display:"flex"}}>
                    <Listas 
                    titulo="Series Populares"
                    pelicula={cortarArrayPeliculas(series)}
                    isTv={true}
                    />
                </Box>
            </Box>
        </Container>
    )
}

export default Home;