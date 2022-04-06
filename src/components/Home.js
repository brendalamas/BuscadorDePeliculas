import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Footer from "./Footer"
import CarruselHome from "./CarruselHome";
// import CircularProgress from '@mui/material/CircularProgress';
import useFetchPeliculas from "../hook/useFetchPeliculas";
import { cortarArrayPeliculas } from "../utils/variables";
import { Typography } from '@mui/material';


const Home = ()=>{
    const { pelicula, isLoading: isLoadingPeliculas } = useFetchPeliculas('popular', 'movie');
    const { pelicula: peliculasMejorPuntuadas, isLoading: isLoadingPeliculasMejor} = useFetchPeliculas('top_rated', 'movie');

  const { pelicula: series, isLoading: isLoadingSeries} = useFetchPeliculas('popular','tv');
  const { pelicula: seriesMejorPuntuadas, isLoading: isLoadingSeriesMejor } = useFetchPeliculas('top_rated','tv');

    return(
      <Container sx={{mt:18, display:"flex", flexDirection:"column", position:"relative"}}>
        <Box sx={{
          display:"flex", 
          flexDirection:"column", 
          alignItems:"center", 
          bgcolor:"#000000", 
          color:"#7F020C",
          mb:10}}
        >
          <Typography variant="h1" fontWeight="bold"> 
            Bienvenid🎥
          </Typography>
          <Typography variant="h2"> 
            ¡Espero que disfrutes del Buscador!
          </Typography>
        </Box>

        <CarruselHome
          titulo="Series Populares"
          pelicula={cortarArrayPeliculas(series)}
          isLoading={isLoadingSeries}
          categoria="popular"
          isTV={true}
        />
        <CarruselHome
          titulo="Peliculas Populares" 
          pelicula={cortarArrayPeliculas(pelicula)}
          isLoading={isLoadingPeliculas}
          categoria="popular"
          isTV={false}
        />
        <CarruselHome
          titulo="Series Mejor Puntuadas"
          pelicula={cortarArrayPeliculas(seriesMejorPuntuadas)}
          isLoading={isLoadingSeriesMejor}
          categoria="top_rated"
          isTV={true}
        />
        <CarruselHome
          titulo="Peliculas Mejor Puntuadas" 
          pelicula={cortarArrayPeliculas(peliculasMejorPuntuadas)}
          isLoading={isLoadingPeliculasMejor}
          categoria="top_rated"
          isTV={false}
        />
        <Footer/>
      </Container>
    )
}

export default Home;