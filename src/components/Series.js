import useFetchPeliculas from "../hook/useFetchPeliculas";
import { cortarArrayPeliculas } from "../utils/variables";
import Container from '@mui/material/Container';
import Secciones from "./Secciones";
import CarruselSerie from './CarruselSerie';
import Box from '@mui/material/Box';
import Context from "../context/Context";
import { useContext } from 'react';
import {seriestitulo} from "../utils/titulos";


const Series = ()=>{
    const context = useContext(Context);

    const { pelicula: seriesPopulares} = useFetchPeliculas('popular','tv', `${context.language}`);
    const { pelicula: seriesConMejoresCriticas} = useFetchPeliculas('top_rated','tv', `${context.language}`);
    const { pelicula: seriesAlAire} = useFetchPeliculas('on_the_air','tv', `${context.language}`);

    return(
        <Container sx={{mt:20}}>
            <CarruselSerie/>
            <Box sx={{mt:7}}>
                <Secciones
                cardPrincipales= {cortarArrayPeliculas(seriesPopulares)}
                titulo= {seriestitulo[context.language].populares}
                categoria="popular"
                isTV={true}
                />
                <Secciones
                cardPrincipales= {cortarArrayPeliculas(seriesConMejoresCriticas)}
                titulo= {seriestitulo[context.language].mejorPuntuadas}
                categoria="top_rated"
                isTV={true}
                />
                <Secciones
                cardPrincipales= {cortarArrayPeliculas(seriesAlAire)}
                titulo= {seriestitulo[context.language].estreno}
                categoria="on_the_air"
                isTV={true}
                />
            </Box>
            
        </Container>
    )
}

export default Series;