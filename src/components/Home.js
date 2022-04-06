import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Footer from "./Footer"
import CarruselHome from "./CarruselHome";
import useFetchPeliculas from "../hook/useFetchPeliculas";
import { cortarArrayPeliculas } from "../utils/variables";
import Context from "../context/Context";
import { useContext } from 'react';

import {titulosExtras, seriestitulo, peliculastitulo} from "../utils/titulos";


const Home = ()=>{
  const context = useContext(Context);

  const { pelicula, isLoading: isLoadingPeliculas } = useFetchPeliculas('popular', 'movie', `${context.language}`);
  const { pelicula: peliculasMejorPuntuadas, isLoading: isLoadingPeliculasMejor} = useFetchPeliculas('top_rated', 'movie', `${context.language}`);

  const { pelicula: series, isLoading: isLoadingSeries} = useFetchPeliculas('popular','tv', `${context.language}`);
  const { pelicula: seriesMejorPuntuadas, isLoading: isLoadingSeriesMejor} = useFetchPeliculas('top_rated','tv', `${context.language}`);

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
            {titulosExtras[context.language].bienvenidos}
          </Typography>
          <Typography variant="h2"> 
            {titulosExtras[context.language].bienvenidosParrafo}
          </Typography>
        </Box>

        <CarruselHome
          titulo={seriestitulo[context.language].populares}
          pelicula={cortarArrayPeliculas(series)}
          isLoading={isLoadingSeries}
          categoria="popular"
          isTV={true}
        />
        <CarruselHome
          titulo={peliculastitulo[context.language].populares}
          pelicula={cortarArrayPeliculas(pelicula)}
          isLoading={isLoadingPeliculas}
          categoria="popular"
          isTV={false}
        />
        <CarruselHome
          titulo={seriestitulo[context.language].mejorPuntuadas}
          pelicula={cortarArrayPeliculas(seriesMejorPuntuadas)}
          isLoading={isLoadingSeriesMejor}
          categoria="top_rated"
          isTV={true}
        />
        <CarruselHome
          titulo={peliculastitulo[context.language].mejorPuntuadas}
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