import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Listas from "./Listas";
import Carrusel from './Carrusel';
import useFetchPeliculas from "../hook/useFetchPeliculas";
import { cortarArrayPeliculas } from "../utils/variables";

const Home = ()=>{
    const { pelicula } = useFetchPeliculas('popular', 'movie');
    const { pelicula: peliculasMejorPuntuadas } = useFetchPeliculas('top_rated', 'movie');

  const { pelicula: series } = useFetchPeliculas('popular','tv');
  const { pelicula: seriesMejorPuntuadas } = useFetchPeliculas('top_rated','tv');

    return(
        <Container sx={{mt:15, display:"flex", flexDirection:"column"}}>
            <Carrusel/>
            <Box sx={{display:"flex", flexDirection:"column", mt:8}}>
                <Box sx={{display:"flex", flexDirection:"column"}}>
                  <Listas 
                    titulo="Peliculas Populares" 
                    pelicula={cortarArrayPeliculas(pelicula)}
                    isTv={false}
                  />
                  <Listas 
                    titulo="Peliculas Mejor Puntuadas" 
                    pelicula={cortarArrayPeliculas(peliculasMejorPuntuadas)}
                    isTv={false}
                  />
                  <Listas 
                    titulo="Series Populares"
                    pelicula={cortarArrayPeliculas(series)}
                    isTv={true}
                  />
                  <Listas 
                    titulo="Series Mejor Puntuadas"
                    pelicula={cortarArrayPeliculas(seriesMejorPuntuadas)}
                    isTv={true}
                  />
                </Box>
            </Box>
        </Container>
    )
}

export default Home;