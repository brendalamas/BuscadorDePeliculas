import useFetchPeliculas from "../hook/useFetchPeliculas";
import { cortarArrayPeliculas } from "../utils/variables";
import Container from '@mui/material/Container';
import SeriesSecciones from "./SeriesSecciones";
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
                <SeriesSecciones
                seriesSlice= {cortarArrayPeliculas(seriesPopulares)}
                titulo= "Series Populares"
                categoria="popular"
                />
                <SeriesSecciones
                seriesSlice= {cortarArrayPeliculas(seriesConMejoresCriticas)}
                titulo= "Series con mejores criticas"
                categoria="top_rated"
                />
                <SeriesSecciones
                seriesSlice= {cortarArrayPeliculas(seriesAlAire)}
                titulo= "Series a estrenarse"
                categoria="on_the_air"
                />
            </Box>
            
        </Container>
    )
}

export default Series;