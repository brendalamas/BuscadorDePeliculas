import useFetchPeliculas from "../hook/useFetchPeliculas";
import { cortarArrayPeliculas } from "../utils/variables";
import Container from '@mui/material/Container';
import Secciones from "./Secciones";
import CarruselSerie from './CarruselSerie';
import Box from '@mui/material/Box';

const Series = ()=>{
    const { pelicula: seriesPopulares } = useFetchPeliculas('popular','tv');
    const { pelicula: seriesConMejoresCriticas} = useFetchPeliculas('top_rated','tv');
    const { pelicula: seriesAlAire } = useFetchPeliculas('on_the_air','tv');

    return(
        <Container sx={{mt:20}}>
            <CarruselSerie/>
            <Box sx={{mt:7}}>
                <Secciones
                cardPrincipales= {cortarArrayPeliculas(seriesPopulares)}
                titulo= "Series Populares"
                categoria="popular"
                isTV={true}
                />
                <Secciones
                cardPrincipales= {cortarArrayPeliculas(seriesConMejoresCriticas)}
                titulo= "Series con mejores criticas"
                categoria="top_rated"
                isTV={true}
                />
                <Secciones
                cardPrincipales= {cortarArrayPeliculas(seriesAlAire)}
                titulo= "Series a estrenarse"
                categoria="on_the_air"
                isTV={true}
                />
            </Box>
            
        </Container>
    )
}

export default Series;