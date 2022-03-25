import Typography  from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Presentacion from "./Presentacion"
import useFetchPeliculas from "../hook/useFetchPeliculas";
import { cortarArrayPeliculas } from "../utils/variables";

const Populares = ()=>{
    const { pelicula: series } = useFetchPeliculas(
        'popular',
        'tv',
      );

    return(
        <Container sx={{mt:20}}>
            <Typography variant="h4" textAlign="center" color="#FF7E88" fontWeight="bold" sx={{mb:5}}>
                SERIES POPULARES
            </Typography>
            <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                {cortarArrayPeliculas(series).map((serie)=>(
                    <Presentacion
                        key={serie.id}
                        imagen={`https://image.tmdb.org/t/p/original/${serie.poster_path}`}
                        titulo= {serie.title}
                        link={serie.id}
                    />
                ))}
            </Box>

        </Container>
    )
}

export default Populares;