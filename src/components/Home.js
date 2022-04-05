import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Listas from "./Listas";
import Footer from "./Footer"
// import CircularProgress from '@mui/material/CircularProgress';
import useFetchPeliculas from "../hook/useFetchPeliculas";
import { cortarArrayPeliculas } from "../utils/variables";


const Home = ()=>{
    const { pelicula, isLoading: isLoadingPeliculas } = useFetchPeliculas('popular', 'movie');
    const { pelicula: peliculasMejorPuntuadas, isLoading: isLoadingPeliculasMejor} = useFetchPeliculas('top_rated', 'movie');

  const { pelicula: series, isLoading: isLoadingSeries} = useFetchPeliculas('popular','tv');
  const { pelicula: seriesMejorPuntuadas, isLoading: isLoadingSeriesMejor } = useFetchPeliculas('top_rated','tv');

    return(
      <Container sx={{mt:15, display:"flex", flexDirection:"column", position:"relative"}}>
        {/* <Carrusel/> */}
        <Box sx={{display:"flex", justifyContent:"center"}}>
          <h1> Bienvenidos!</h1>
        </Box>
        
        <Box sx={{display:"flex", flexDirection:"column", mt:8}}>
            <Listas 
              titulo="Peliculas Populares" 
              pelicula={cortarArrayPeliculas(pelicula)}
              isLoading={isLoadingPeliculas}
              categoria="popular"
            />
            {/* <Listas 
              titulo="Peliculas Mejor Puntuadas" 
              pelicula={cortarArrayPeliculas(peliculasMejorPuntuadas)}
              isLoading={isLoadingPeliculasMejor}
            /> */}
            <Listas 
              titulo="Series Populares"
              pelicula={cortarArrayPeliculas(series)}
              isLoading={isLoadingSeries}
              categoria="popular"
            />
            {/* <Listas 
              titulo="Series Mejor Puntuadas"
              pelicula={cortarArrayPeliculas(seriesMejorPuntuadas)}
              isLoading={isLoadingSeriesMejor}
            /> */}
        </Box>
        <Footer/>
      </Container>
    )
}

export default Home;